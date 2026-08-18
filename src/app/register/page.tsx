"use client";

import { submitRegistration } from "../actions";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import { Suspense } from "react";

function RegisterForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const isUIUpgrade = typeParam === "ui";

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <motion.div 
        className="glass-panel" 
        style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-8">
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {isUIUpgrade ? "Upgrade Your Project UI" : "Register Your Project"}
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Fill out the details below and our team will contact you shortly.
          </p>
        </div>

        <form action={submitRegistration}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ gridColumn: "1 / -1" }}>
              <h3 style={{ color: "var(--accent-cyan)", borderBottom: "1px solid var(--border-glass)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Personal Details</h3>
            </div>
            
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input type="text" name="fullName" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input type="email" name="emailAddress" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile Number *</label>
              <input type="tel" name="mobileNumber" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">College / University *</label>
              <input type="text" name="college" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Department *</label>
              <input type="text" name="department" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Year / Semester *</label>
              <input type="text" name="yearSemester" className="form-input" required />
            </div>

            <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
              <h3 style={{ color: "var(--accent-purple)", borderBottom: "1px solid var(--border-glass)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Project Details</h3>
            </div>

            <div className="form-group">
              <label className="form-label">Project Type *</label>
              <select name="projectType" className="form-select" required defaultValue={isUIUpgrade ? "Web Application" : ""}>
                <option value="" disabled>Select Project Type</option>
                <option>Minor Project</option>
                <option>Major / Final Year Project</option>
                <option>Software Project</option>
                <option>Hardware Project</option>
                <option>IoT Project</option>
                <option>AI/ML Project</option>
                <option>Mobile Application</option>
                <option>Web Application</option>
                <option>Personal Portfolio</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Status *</label>
              <select name="projectStatus" className="form-select" required defaultValue={isUIUpgrade ? "Need UI/Dashboard" : ""}>
                <option value="" disabled>Select Status</option>
                <option>New Project</option>
                <option>Already Have a Project</option>
                <option>Need Improvements</option>
                <option>Need UI/Dashboard</option>
                <option>Need Documentation</option>
                <option>Need PPT / Presentation</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Technology Preference *</label>
              <select name="techPreference" className="form-select" required>
                <option value="" disabled>Select Tech Stack</option>
                <option>React / Next.js</option>
                <option>Python / Django / Flask</option>
                <option>Java / Spring Boot</option>
                <option>Node.js / Express</option>
                <option>Flutter / Dart</option>
                <option>Android (Kotlin/Java)</option>
                <option>Arduino / ESP32</option>
                <option>Other / Not Sure</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Expected Completion Date</label>
              <input type="date" name="expectedDate" className="form-input" />
            </div>

            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label className="form-label">Project Title / Idea *</label>
              <input type="text" name="projectTitle" className="form-input" required placeholder="e.g. Smart Campus Navigation System" />
            </div>

            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label className="form-label">Detailed Requirements *</label>
              <textarea name="requirements" className="form-textarea" rows={5} required placeholder="Describe what you want to build or the problem you are solving..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Budget Range</label>
              <select name="budgetRange" className="form-select">
                <option value="">Select Range (Optional)</option>
                <option>Below ₹5,000</option>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹20,000</option>
                <option>Above ₹20,000</option>
              </select>
            </div>

            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "1rem", borderRadius: "0.5rem", border: "1px dashed var(--accent-purple)", color: "var(--accent-purple)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                <strong>📎 Project Files & Documentation:</strong> Please send any related project files (PPT, PDF, Source Code) directly to our WhatsApp number after submitting this registration form.
              </div>
            </div>

            <div className="form-group" style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input type="checkbox" required style={{ width: "1.2rem", height: "1.2rem" }} />
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>I confirm that the information provided is correct.</span>
              </label>
            </div>
            
            <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "1rem", fontSize: "1.125rem" }}>
                SUBMIT PROJECT REQUEST <Rocket size={20} />
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: "4rem 1.5rem", textAlign: "center" }}>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  )
}
