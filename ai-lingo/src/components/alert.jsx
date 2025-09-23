export function DuolingoAlert({ type, children }) {
  const colors = {
    success: "bg-duolingo-green text-white",
    error: "bg-duolingo-red text-white",
    warning: "bg-duolingo-yellow text-gray-800",
    info: "bg-duolingo-blue text-white",
  };
  return (
    <div className={`p-4 rounded-xl font-sans font-semibold ${colors[type]}`}>
      {children}
    </div>
  );
}
