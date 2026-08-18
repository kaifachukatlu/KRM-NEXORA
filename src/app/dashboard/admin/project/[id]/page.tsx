import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { User, Mail, Phone, MapPin, Building, GraduationCap, Calendar, DollarSign, Target, Code, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const project = await prisma.projectRequest.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!project) {
    return notFound();
  }

  const messageText = encodeURIComponent(
    `Hi ${project.fullName}, this is the KRM NEXORA team. We are reaching out regarding your project request for "${project.projectTitle}".`
  );

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="flex justify-between items-center mb-8">
        <h1 style={{ fontSize: "2rem" }}>Project <span className="text-gradient">Details</span></h1>
        <Link href="/dashboard/admin" className="btn btn-secondary">Back to Dashboard</Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        
        {/* Personal Details */}
        <div className="glass-panel" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", color: "var(--accent-purple)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "0.5rem" }}>
            <User size={20} style={{ display: "inline", marginRight: "0.5rem", verticalAlign: "middle" }} />
            Student Details
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <DetailRow icon={<User size={16} />} label="Full Name" value={project.fullName} />
            <DetailRow icon={<Phone size={16} />} label="Mobile Number" value={project.mobileNumber} />
            <DetailRow icon={<Mail size={16} />} label="Email Address" value={project.emailAddress} />
            <DetailRow icon={<Building size={16} />} label="College" value={project.college} />
            <DetailRow icon={<Target size={16} />} label="Department" value={project.department} />
            <DetailRow icon={<GraduationCap size={16} />} label="Year/Semester" value={project.yearSemester} />
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <a href={`https://wa.me/91${project.mobileNumber.replace(/\D/g,'')}?text=${messageText}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, textAlign: "center", background: "#25D366", color: "white", borderColor: "#25D366" }}>
              WhatsApp Student
            </a>
            <a href={`tel:${project.mobileNumber}`} className="btn btn-secondary" style={{ flex: 1, textAlign: "center" }}>
              Call Student
            </a>
          </div>
        </div>

        {/* Project Details */}
        <div className="glass-panel" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", color: "var(--accent-cyan)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "0.5rem" }}>
            <FileText size={20} style={{ display: "inline", marginRight: "0.5rem", verticalAlign: "middle" }} />
            Project Requirements
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <DetailRow icon={<FileText size={16} />} label="Project Title" value={project.projectTitle} />
            <DetailRow icon={<Target size={16} />} label="Project Type" value={project.projectType} />
            <DetailRow icon={<Code size={16} />} label="Tech Preference" value={project.techPreference} />
            <DetailRow icon={<DollarSign size={16} />} label="Budget Range" value={project.budgetRange} />
            <DetailRow icon={<Calendar size={16} />} label="Expected Date" value={project.expectedDate} />
            
            <div style={{ marginTop: "1rem" }}>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Detailed Requirements</div>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "0.5rem", border: "1px solid var(--border-glass)", whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
                {project.requirements}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", alignItems: "center" }}>
      <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {icon} {label}
      </div>
      <div style={{ fontWeight: "500" }}>{value}</div>
    </div>
  );
}
