import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Search, User, FileText, CheckCircle2, Circle } from "lucide-react";
import { redirect } from "next/navigation";

export default async function StudentDashboard({ searchParams }: { searchParams: Promise<{ regId?: string }> }) {
  const params = await searchParams;
  const regId = params.regId;
  
  let project = null;
  if (regId) {
    project = await prisma.projectRequest.findUnique({
      where: { registrationId: regId },
    });
  }

  async function searchProject(formData: FormData) {
    "use server";
    const id = formData.get("regId");
    if (id) {
      redirect(`/dashboard/student?regId=${id}`);
    }
  }

  const stages = [
    "Registered", 
    "Requirement Review", 
    "Development", 
    "Testing", 
    "Documentation", 
    "Completed"
  ];

  const currentStageIndex = project ? stages.indexOf(project.status) : -1;

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <div className="text-center mb-8">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Student <span className="text-gradient">Dashboard</span></h1>
        <p style={{ color: "var(--text-secondary)" }}>Track your project development progress.</p>
      </div>

      <div className="glass-panel" style={{ maxWidth: "600px", margin: "0 auto 3rem auto", padding: "2rem" }}>
        <form action={searchProject} style={{ display: "flex", gap: "1rem" }}>
          <input 
            type="text" 
            name="regId" 
            placeholder="Enter your Registration ID (e.g. cm00..." 
            className="form-input" 
            defaultValue={regId}
            required 
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary">
            <Search size={18} /> Track
          </button>
        </form>
      </div>

      {regId && !project && (
        <div className="glass-panel" style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem", textAlign: "center", color: "var(--error)" }}>
          <h3>Registration ID not found.</h3>
          <p>Please check your ID and try again.</p>
        </div>
      )}

      {project && (
        <div className="glass-panel" style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem" }}>
          <div className="flex justify-between items-start mb-8 pb-8" style={{ borderBottom: "1px solid var(--border-glass)" }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{project.projectTitle}</h2>
              <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span className="flex items-center gap-1"><User size={16} /> {project.fullName}</span>
                <span className="flex items-center gap-1"><FileText size={16} /> {project.projectType}</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>Current Status</div>
              <div style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-purple)", borderRadius: "2rem", fontWeight: "bold" }}>
                {project.status}
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>Development Progress</h3>
          
          <div style={{ position: "relative", paddingLeft: "1rem" }}>
            {/* Timeline Line */}
            <div style={{ position: "absolute", left: "1.45rem", top: "1rem", bottom: "1rem", width: "2px", background: "var(--border-glass)" }}></div>
            
            {stages.map((stage, index) => {
              const isCompleted = index <= currentStageIndex;
              const isCurrent = index === currentStageIndex;
              
              return (
                <div key={stage} style={{ display: "flex", gap: "1.5rem", marginBottom: index === stages.length - 1 ? 0 : "2rem", position: "relative", zIndex: 1 }}>
                  <div style={{ background: "var(--bg-primary)", padding: "0.25rem" }}>
                    {isCompleted ? (
                      <CheckCircle2 size={24} color={isCurrent ? "var(--accent-purple)" : "var(--success)"} />
                    ) : (
                      <Circle size={24} color="var(--border-glass)" />
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.125rem", color: isCompleted ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: isCurrent ? "bold" : "normal" }}>
                      {stage}
                    </h4>
                    {isCurrent && (
                      <p style={{ fontSize: "0.875rem", color: "var(--accent-cyan)", marginTop: "0.25rem" }}>
                        Currently active phase. We are working on this.
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-glass)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h4 style={{ marginBottom: "0.5rem" }}>Need to upload more files?</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>You can send additional requirements to our support team.</p>
            </div>
            <a href="mailto:support@krmnexora.com" className="btn btn-secondary">Contact Support</a>
          </div>
        </div>
      )}
    </div>
  );
}
