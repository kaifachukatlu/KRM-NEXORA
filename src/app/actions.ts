"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

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

  redirect(`/success?id=${newRequest.registrationId}`);
}
