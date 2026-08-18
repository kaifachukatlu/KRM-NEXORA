import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CheckCircle2, Home, Phone } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ id: string }> }) {
  const params = await searchParams;
  if (!params.id) {
    return notFound();
  }

  const project = await prisma.projectRequest.findUnique({
    where: { registrationId: params.id },
  });

  if (!project) {
    return notFound();
  }

  const rawMessage = `🚀 *New Project Registration* 🚀

*Registration ID:* ${project.registrationId.slice(0, 8)}
*Name:* ${project.fullName}
*Project Type:* ${project.projectType}
*Phone:* ${project.mobileNumber}

Hi KRM NEXORA! I just registered this project on the portal. Please check the details.`;

  const messageText = encodeURIComponent(rawMessage);

  const whatsappUrl1 = `https://wa.me/919441205786?text=${messageText}`;
  const whatsappUrl2 = `https://wa.me/916304457355?text=${messageText}`;

  return (
    <div className="container" style={{ padding: "6rem 1.5rem", display: "flex", justifyContent: "center" }}>
      <div className="glass-panel" style={{ maxWidth: "600px", width: "100%", padding: "4rem", textAlign: "center", borderTop: "4px solid var(--success)" }}>
        <div>
          <CheckCircle2 size={80} color="var(--success)" style={{ margin: "0 auto 1.5rem auto" }} />
        </div>
        
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Registration Successful! 🎉</h1>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
          Thank you for registering your project.
        </p>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
          Your project request has been received successfully.
        </p>

        <div style={{ background: "rgba(0,0,0,0.3)", padding: "2rem", borderRadius: "var(--radius-md)", textAlign: "left", marginBottom: "2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1rem" }}>
            <div style={{ color: "var(--text-secondary)" }}>Registration ID:</div>
            <div style={{ fontWeight: "bold", fontFamily: "monospace", color: "var(--accent-cyan)" }}>{project.registrationId}</div>
            
            <div style={{ color: "var(--text-secondary)" }}>Name:</div>
            <div style={{ fontWeight: "500" }}>{project.fullName}</div>
            
            <div style={{ color: "var(--text-secondary)" }}>Project Type:</div>
            <div style={{ fontWeight: "500" }}>{project.projectType}</div>
            
            <div style={{ color: "var(--text-secondary)" }}>Submission Date:</div>
            <div style={{ fontWeight: "500" }}>{new Date(project.createdAt).toLocaleDateString()}</div>
            
            <div style={{ color: "var(--text-secondary)" }}>Contact Number:</div>
            <div style={{ fontWeight: "500" }}>{project.mobileNumber}</div>
          </div>
        </div>

        <div style={{ padding: "1.5rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-glass)", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.25rem", color: "white", marginBottom: "0.75rem" }}>Final Step: Send us a WhatsApp!</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
            To instantly alert us about your registration, please click one of the buttons below to send your details directly to our WhatsApp numbers.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#25D366", color: "white", padding: "0.75rem 1.5rem", boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)" }}>
              Message Admin 1
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#128C7E", color: "white", padding: "0.75rem 1.5rem", boxShadow: "0 4px 15px rgba(18, 140, 126, 0.3)" }}>
              Message Admin 2
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/" className="btn btn-secondary">
            <Home size={18} /> Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
