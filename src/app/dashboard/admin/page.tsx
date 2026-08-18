import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Users, Code, Cpu, Clock, Activity, CheckCircle, Search } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const projects = await prisma.projectRequest.findMany({
    orderBy: { createdAt: "desc" },
  });

  const stats = {
    total: projects.length,
    software: projects.filter(p => p.projectType.includes("Software") || p.projectType.includes("Web") || p.projectType.includes("App")).length,
    hardware: projects.filter(p => p.projectType.includes("Hardware") || p.projectType.includes("IoT")).length,
    pending: projects.filter(p => p.status === "Registered" || p.status === "Requirement Review").length,
    inDevelopment: projects.filter(p => p.status === "Development" || p.status === "Testing").length,
    completed: projects.filter(p => p.status === "Completed").length,
  };

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="flex justify-between items-center mb-8">
        <h1 style={{ fontSize: "2rem" }}>Admin <span className="text-gradient">Dashboard</span></h1>
        <Link href="/" className="btn btn-secondary">Back to Home</Link>
      </div>

      {/* Stats Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
        <StatCard title="Total Registrations" value={stats.total} icon={<Users size={24} color="var(--accent-purple)" />} />
        <StatCard title="Software Projects" value={stats.software} icon={<Code size={24} color="var(--accent-blue)" />} />
        <StatCard title="Hardware Projects" value={stats.hardware} icon={<Cpu size={24} color="var(--success)" />} />
        <StatCard title="Pending Requests" value={stats.pending} icon={<Clock size={24} color="var(--warning)" />} />
        <StatCard title="In Development" value={stats.inDevelopment} icon={<Activity size={24} color="var(--accent-cyan)" />} />
        <StatCard title="Completed" value={stats.completed} icon={<CheckCircle size={24} color="var(--success)" />} />
      </div>

      {/* Data Table Area */}
      <div className="glass-panel" style={{ padding: "2rem" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 style={{ fontSize: "1.5rem" }}>Recent Registrations</h2>
          <div style={{ position: "relative", width: "300px" }}>
            <Search size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} />
            <input type="text" placeholder="Search students..." className="form-input" style={{ paddingLeft: "2.5rem" }} />
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-glass)", color: "var(--text-secondary)" }}>
                <th style={{ padding: "1rem" }}>Reg ID</th>
                <th style={{ padding: "1rem" }}>Student</th>
                <th style={{ padding: "1rem" }}>Project Details</th>
                <th style={{ padding: "1rem" }}>Type</th>
                <th style={{ padding: "1rem" }}>Status</th>
                <th style={{ padding: "1rem" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "1rem", fontFamily: "monospace", color: "var(--accent-cyan)" }}>{project.registrationId.slice(0, 8)}</td>
                  <td style={{ padding: "1rem" }}>
                    <div style={{ fontWeight: "500" }}>{project.fullName}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{project.mobileNumber}</div>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <div style={{ fontWeight: "500" }}>{project.projectTitle}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{project.requirements}</div>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <span style={{ padding: "0.25rem 0.75rem", background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-purple)", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: "600" }}>
                      {project.projectType}
                    </span>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <span style={{ padding: "0.25rem 0.75rem", background: "rgba(16, 185, 129, 0.15)", color: "var(--success)", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: "600" }}>
                      {project.status}
                    </span>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <Link href={`/dashboard/admin/project/${project.id}`} className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: "2rem", textAlign: "center", color: "var(--text-secondary)" }}>No registrations found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: number, icon: React.ReactNode }) {
  return (
    <div className="glass-panel" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
      <div style={{ padding: "1rem", background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-md)" }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>{title}</div>
        <div style={{ fontSize: "1.75rem", fontWeight: "bold" }}>{value}</div>
      </div>
    </div>
  )
}
