"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sendEmail } from "@/lib/email";

export async function submitRegistration(formData: FormData) {
  const data = {
    fullName: formData.get("fullName") as string,
    emailAddress: formData.get("emailAddress") as string,
    mobileNumber: formData.get("mobileNumber") as string,
    college: formData.get("college") as string,
    department: formData.get("department") as string,
    yearSemester: formData.get("yearSemester") as string,
    projectType: formData.get("projectType") as string,
    projectStatus: formData.get("projectStatus") as string,
    techPreference: formData.get("techPreference") as string,
    projectTitle: formData.get("projectTitle") as string,
    requirements: formData.get("requirements") as string,
    expectedDate: formData.get("expectedDate") as string,
    budgetRange: formData.get("budgetRange") as string,
  };

  const newRequest = await prisma.projectRequest.create({
    data: data,
  });

  // Send registration confirmation email (await to ensure Vercel doesn't kill the function before sending)
  const dashboardLink = `https://krmnexora.com/dashboard/student?regId=${newRequest.registrationId}`;
  await sendEmail(
    newRequest.emailAddress,
    "Registration Confirmed: KRM NEXORA",
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Registration Successful! 🎉</h2>
        <p>Hi ${newRequest.fullName},</p>
        <p>Thank you for registering your project <strong>"${newRequest.projectTitle}"</strong> with KRM NEXORA.</p>
        <p>Your unique Registration ID is: <strong>${newRequest.registrationId}</strong></p>
        <p>You can track the live progress of your project on your Student Dashboard:</p>
        <a href="${dashboardLink}" style="display: inline-block; padding: 10px 20px; background-color: #8b5cf6; color: white; text-decoration: none; border-radius: 5px; margin-top: 10px;">View Student Dashboard</a>
      </div>
    `
  ).catch(console.error);

  redirect(`/success?id=${newRequest.registrationId}`);
}

export async function updateProjectAdminDetails(projectId: string, formData: FormData) {
  const status = formData.get("status") as string;
  const assignedTo = formData.get("assignedTo") as string;
  const adminNotes = formData.get("adminNotes") as string;
  const deliverableLink = formData.get("deliverableLink") as string;

  const updatedProject = await prisma.projectRequest.update({
    where: { id: projectId },
    data: {
      status,
      assignedTo: assignedTo === "Unassigned" ? null : assignedTo,
      adminNotes,
      deliverableLink: deliverableLink || null,
    },
  });

  // If status changed, send an update email (non-blocking)
  const dashboardLink = `https://krmnexora.com/dashboard/student?regId=${updatedProject.registrationId}`;
  
  let emailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Project Status Update 🚀</h2>
      <p>Hi ${updatedProject.fullName},</p>
      <p>Your project <strong>"${updatedProject.projectTitle}"</strong> has been updated!</p>
      <p><strong>New Status:</strong> ${status}</p>
      <a href="${dashboardLink}" style="display: inline-block; padding: 10px 20px; background-color: #8b5cf6; color: white; text-decoration: none; border-radius: 5px; margin-top: 10px; margin-bottom: 20px;">View Student Dashboard</a>
  `;

  if (status === "Completed" && deliverableLink) {
    emailHtml += `
      <div style="background-color: #10b981; padding: 15px; border-radius: 5px; color: white;">
        <h3 style="margin-top: 0;">Your Deliverables are Ready!</h3>
        <p>You can download your final project files securely using the link below:</p>
        <a href="${deliverableLink}" style="display: inline-block; padding: 8px 15px; background-color: white; color: #10b981; text-decoration: none; border-radius: 4px; font-weight: bold;">Download Files</a>
      </div>
    `;
  }

  emailHtml += `</div>`;

  await sendEmail(
    updatedProject.emailAddress,
    `Project Update: ${status}`,
    emailHtml
  ).catch(console.error);

  revalidatePath("/dashboard/admin");
  revalidatePath(`/dashboard/admin/project/${projectId}`);
}
