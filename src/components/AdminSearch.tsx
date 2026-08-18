"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

export default function AdminSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  // Debounce search to avoid spamming URL updates
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        if (query) {
          router.push(`/dashboard/admin?q=${encodeURIComponent(query)}`);
        } else {
          router.push(`/dashboard/admin`);
        }
      });
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <Search size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} />
      <input 
        type="text" 
        placeholder="Search ID, Name, or Phone..." 
        className="form-input" 
        style={{ paddingLeft: "2.5rem" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isPending && <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", color: "var(--accent-purple)" }}>Loading...</div>}
    </div>
  );
}
