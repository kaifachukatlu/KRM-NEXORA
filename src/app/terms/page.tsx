import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-purple)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="glass-panel" style={{ padding: "3rem", borderRadius: "var(--radius-lg)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Terms of <span className="text-gradient">Service</span></h1>
        
        <div style={{ color: "var(--text-secondary)", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>1. Acceptance of Terms</h2>
          <p>By accessing or using the services provided by KRM NEXORA Technologies, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access our services.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>2. Project Services</h2>
          <p>We provide software development, hardware integration, and documentation services for academic and professional projects. The scope, timeline, and cost of each project will be agreed upon during the registration and consultation phase.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>3. Intellectual Property</h2>
          <p>Upon full payment, the source code and project deliverables are transferred to you for your personal or academic use. However, KRM NEXORA retains the right to showcase the generic concepts or UI designs in our portfolio.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>4. Limitation of Liability</h2>
          <p>KRM NEXORA Technologies is not liable for any academic grading outcomes resulting from the submission of our project deliverables. Our services are intended for learning, reference, and technical assistance.</p>
        </div>
      </div>
    </div>
  );
}
