"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Smartphone, Database, BookOpen, Presentation, MonitorDot, Wrench, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "6rem", position: "relative" }}>
        <motion.div
          style={{ position: 'relative', zIndex: 10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: "inline-block", padding: "0.25rem 1rem", borderRadius: "2rem", background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-purple)", marginBottom: "1.5rem", fontWeight: "600", fontSize: "0.875rem" }}>
            🚀 MINOR & FINAL YEAR PROJECT DEVELOPMENT
          </div>
          <h1 className="hero-title" style={{ fontSize: "3.5rem", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Bring Your <span className="text-gradient" data-text="Ideas to Life">Ideas to Life</span>
          </h1>
          <p className="hero-desc" style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto 2.5rem auto", lineHeight: "1.8" }}>
            Software &bull; Hardware &bull; IoT &bull; AI/ML &bull; Mobile Apps &bull; Documentation &bull; PPT &bull; Portfolios
          </p>
          
          <div className="flex justify-center gap-4 btn-group">
            <Link href="/register" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
              Register Your Project <ArrowRight size={20} />
            </Link>
            <a href="#services" className="btn btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
              Explore Services
            </a>
          </div>

          <div className="support-card" style={{ marginTop: "3rem", display: "inline-flex", alignItems: "center", gap: "2rem", padding: "1rem 2rem", background: "rgba(20, 22, 35, 0.8)", backdropFilter: "blur(12px)", border: "1px solid var(--border-glass)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>Call Support</div>
              <div style={{ fontWeight: "600", fontSize: "1.125rem" }}>📞 9441205786</div>
            </div>
            <div className="support-divider" style={{ width: "1px", height: "40px", background: "var(--border-glass)" }}></div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>WhatsApp Support</div>
              <div style={{ fontWeight: "600", fontSize: "1.125rem" }}>📞 6304457355</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ marginBottom: "6rem" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Our <span className="text-gradient">Services</span></h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[
            { icon: <Code size={32} color="var(--accent-blue)" />, title: "Software Projects", desc: "Full-stack web applications, desktop software, and enterprise solutions." },
            { icon: <Cpu size={32} color="var(--success)" />, title: "Hardware & IoT", desc: "Arduino, ESP32, Raspberry Pi, and custom IoT systems with sensors." },
            { icon: <Database size={32} color="var(--accent-purple)" />, title: "AI/ML Projects", desc: "Machine learning models, computer vision, NLP, and data science." },
            { icon: <Smartphone size={32} color="var(--warning)" />, title: "Mobile Applications", desc: "Native and cross-platform mobile apps for Android and iOS." },
            { icon: <MonitorDot size={32} color="var(--accent-cyan)" />, title: "Dashboard Development", desc: "Interactive admin panels and data visualization dashboards." },
            { icon: <BookOpen size={32} color="var(--text-secondary)" />, title: "Documentation & Reports", desc: "Professional IEEE standard LaTeX reports and documentation." },
            { icon: <Presentation size={32} color="#f43f5e" />, title: "PPT & Presentation", desc: "Engaging slide decks for your project reviews and vivas." },
            { icon: <Wrench size={32} color="#10b981" />, title: "Existing Project UI", desc: "Modernize your existing backend with a premium frontend." },
            { icon: <Briefcase size={32} color="var(--accent-pink)" />, title: "Personal Portfolios", desc: "Stunning 3D, interactive, and glassmorphic portfolios to showcase your skills." },
          ].map((service, i) => (
            <motion.div 
              key={i}
              className="glass-panel"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "1rem", width: "fit-content" }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem" }}>{service.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing Project Feature */}
      <section style={{ marginBottom: "4rem" }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: "4rem", textAlign: "center", background: "linear-gradient(180deg, rgba(30, 35, 55, 0.7) 0%, rgba(59, 130, 246, 0.05) 100%)", borderColor: "rgba(59, 130, 246, 0.2)" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Already Have a Project?</h2>
          <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>Don't build everything from scratch. Let us give it a premium look.</p>
          
          <div className="flex justify-center items-center flex-wrap gap-4 mb-8" style={{ fontSize: "1.125rem", fontWeight: "500" }}>
            <span>Existing Project</span>
            <ArrowRight color="var(--accent-purple)" />
            <span>Modern Dashboard</span>
            <ArrowRight color="var(--accent-purple)" />
            <span>Admin Panel</span>
            <ArrowRight color="var(--accent-purple)" />
            <span className="text-gradient">Complete Application</span>
          </div>

          <Link href="/register?type=ui" className="btn btn-primary">
            Upgrade My Project UI
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
