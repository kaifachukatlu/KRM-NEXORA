import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Code2, User } from "lucide-react";
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
            linesGradient={["#e945f5", "#6f6f6f", "#6a6a6a"]}
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

        <footer style={{ borderTop: "1px solid var(--border-glass)", padding: "2rem", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.875rem", position: "relative", zIndex: 10 }}>
          <div style={{ marginBottom: "1rem" }}>
            <strong>Need Help? Contact Us:</strong> 📞 9441205786 | 📞 6304457355
          </div>
          <p>&copy; {new Date().getFullYear()} KRM NEXORA College Services. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
