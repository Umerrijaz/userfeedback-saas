"use client";

import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  return (
    <main>
      <h1>Kundenfeedback erfassen, um bessere Produkte zu entwickeln</h1>
      <div>
        Erstelle in wenigen Minuten ein Feedback-Board, priorisiere Funktionen
        und entwickle Produkte, die deine Kunden lieben werden
      </div>
      <ButtonLogin />
    </main>
  );
}
