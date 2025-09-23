export function Hero({ title, subtitle, children }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <h1 className="text-5xl font-duolingo font-bold text-duolingo-blue mb-4">{title}</h1>
      <p className="text-duolingo-gray mb-6">{subtitle}</p>
      {children}
    </section>
  );
}
