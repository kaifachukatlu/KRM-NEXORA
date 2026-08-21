import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-purple)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="glass-panel" style={{ padding: "3rem", borderRadius: "var(--radius-lg)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Refund <span className="text-gradient">Policy</span></h1>
        
        <div style={{ color: "var(--text-secondary)", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>1. General Policy</h2>
          <p>At KRM NEXORA Technologies, we strive to deliver high-quality academic and professional projects. Due to the custom and digital nature of software development, documentation, and hardware integration, our refund policy is strictly structured.</p>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>2. Eligibility for Refunds</h2>
          <p>Refunds may only be considered under the following circumstances:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>We are unable to start or deliver the project as per the initially agreed requirements.</li>
            <li>A major technical failure on our end prevents the project from being completed, and no alternative solution can be provided.</li>
          </ul>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>3. Non-Refundable Scenarios</h2>
          <p>We do not issue refunds for the following:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>Change of mind after development has officially commenced.</li>
            <li>Changes in project requirements by your university or evaluators after the initial agreement.</li>
            <li>Failure to pass academic evaluations or vivas, as our services are intended for technical assistance and learning purposes only.</li>
            <li>Hardware components that have already been purchased or shipped.</li>
          </ul>
          
          <h2 style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem" }}>4. Requesting a Refund</h2>
          <p>To request a refund, please contact us at support@krmnexora.com with your project details and the reason for the request. Each request is evaluated on a case-by-case basis by our founders.</p>
        </div>
      </div>
    </div>
  );
}
