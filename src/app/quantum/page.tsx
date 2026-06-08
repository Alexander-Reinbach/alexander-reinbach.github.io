import type { Metadata } from "next";
import { QuantumLanding } from "@/components/QuantumLanding";

export const metadata: Metadata = {
  title: "Alex Reinbach — Quantum Systems",
  description:
    "Initiativbewerbung bei Quantum Systems: Serienindustrialisierung sicherheitskritischer Systeme trifft Applied AI. Vom Prototyp zur zertifizierten Serie — mit Edge-AI an Bord.",
  // Unlisted: nicht von der Hauptseite verlinkt und für Suchmaschinen gesperrt.
  // Der Link ist nur für die Quantum-Systems-Bewerbung gedacht.
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuantumPage() {
  return <QuantumLanding />;
}
