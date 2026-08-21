"use client";

import { useFormStatus } from "react-dom";
import { Save } from "lucide-react";

export default function AdminSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending} style={{ padding: "0.75rem 1.5rem", opacity: pending ? 0.7 : 1, cursor: pending ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Save size={18} />
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}
