import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Code2, User, Github, Instagram, Linkedin, Mail } from "lucide-react";
import FloatingLines from "@/components/FloatingLines";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Development & Support | Minor & Major Projects",
  description: "Register your college minor, major, or final year projects. We build Software, Hardware, IoT, AI/ML, and Mobile Apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global FloatingLines Background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
          <FloatingLines 
            enabledWaves={["top","middle","bottom"]}
            lineCount={8}
            lineDistance={8}
            bendRadius={8}
            bendStrength={-2}
            interactive={true}
            parallax={true}
            animationSpeed={1}
            linesGradient={["#00f2fe", "#4facfe", "#005bea"]}
          />
        </div>

        <nav className="nav-container" style={{ padding: "1rem 2rem", borderBottom: "1px solid var(--border-glass)", background: "var(--bg-glass)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "bold", fontSize: "1.25rem" }}>
            <Code2 color="var(--accent-cyan)" />
            <span>KRM <span className="text-gradient" data-text="NEXORA">NEXORA</span></span>
          </Link>
          <div className="nav-links" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/#services" className="nav-link">Services</Link>
            <Link href="/dashboard/student" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <User size={18} />
              Dashboard
            </Link>
            <Link href="/register" className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>Register Project</Link>
          </div>
        </nav>
        
        <main style={{ minHeight: "calc(100vh - 140px)", position: "relative", zIndex: 10 }}>
          {children}
        </main>

        <footer style={{ borderTop: "1px solid var(--border-glass)", background: "rgba(10, 10, 15, 0.8)", backdropFilter: "blur(20px)", padding: "4rem 2rem 2rem", position: "relative", zIndex: 10 }}>
          <div className="container" style={{ margin: "0 auto", maxWidth: "1200px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
              
              {/* Brand Column */}
              <div>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>
                  <Code2 color="var(--accent-cyan)" />
                  <span>KRM <span className="text-gradient" data-text="NEXORA">NEXORA</span></span>
                </Link>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  Empowering students with premium project development, hardware integration, and comprehensive documentation services.
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="#" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }}><Github size={20} /></a>
                  <a href="#" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }}><Linkedin size={20} /></a>
                  <a href="#" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }}><Instagram size={20} /></a>
                  <a href="mailto:contact@krmnexora.com" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }}><Mail size={20} /></a>
                </div>
              </div>

              {/* Services Column */}
              <div>
                <h4 style={{ color: "white", fontWeight: "600", marginBottom: "1.25rem", fontSize: "1.05rem" }}>Our Services</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <Link href="/#services" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>Software Development</Link>
                  <Link href="/#services" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>IoT & Hardware</Link>
                  <Link href="/#services" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>AI / ML Solutions</Link>
                  <Link href="/#services" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>IEEE Documentation</Link>
                </div>
              </div>

              {/* Legal Column */}
              <div>
                <h4 style={{ color: "white", fontWeight: "600", marginBottom: "1.25rem", fontSize: "1.05rem" }}>Legal</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <Link href="/privacy" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>Privacy Policy</Link>
                  <Link href="/terms" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>Terms of Service</Link>
                  <Link href="/refund" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textDecoration: "none" }}>Refund Policy</Link>
                </div>
              </div>

              {/* Contact Column */}
              <div>
                <h4 style={{ color: "white", fontWeight: "600", marginBottom: "1.25rem", fontSize: "1.05rem" }}>Contact Us</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  <p>📞 +91 9441205786</p>
                  <p>📞 +91 6304457355 (WhatsApp)</p>
                  <p>✉️ support@krmnexora.com</p>
                  <p>📍 Hyderabad, India</p>
                </div>
              </div>

            </div>
            
            {/* Bottom Copyright */}
            <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                &copy; {new Date().getFullYear()} KRM NEXORA Technologies. All rights reserved.
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
                Built with ❤️ by Kaif, Rithik & Medhas.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
