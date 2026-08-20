import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-purple)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="glass-panel" style={{ padding: "3rem", borderRadius: "var(--radius-lg)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Privacy <span className="text-gradient">Policy</span></h1>
        
        <div style={{ color: "var(--text-secondary)", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>1. Information We Collect</h2>
          <p>At KRM NEXORA Technologies, we collect information that you provide directly to us when you register a project, create an account, or communicate with us. This may include your name, email address, phone number, and project details.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to process your project requests, and to communicate with you about your projects and updates.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>3. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, or destruction. We do not sell your personal data to third parties.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@krmnexora.com.</p>
        </div>
      </div>
    </div>
  );
}
