import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true; // Replace with actual authentication logic
  const name = "Umer"; // Replace with actual user name

  return (
    <main>
      <section className="bg-base-200 flex justify-between items-center relative py-4 px-8">
        <div>Clarity</div>
        <div className=" max-md:hidden absolute left-1/2 -translate-x-1/2 flex gap-6 space-x-4">
          <a className="link link-primary" href="/pricing">
            Pricing
          </a>
          <a className="link link-primary" href="/faq">
            FAQ
          </a>
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Kundenfeedback erfassen, um bessere Produkte zu entwickeln
        </h1>
        <div className="opacity-90 mb-10">
          Erstelle in wenigen Minuten ein Feedback-Board, priorisiere Funktionen
          und entwickle Produkte, die deine Kunden lieben werden
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
