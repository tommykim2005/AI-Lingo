export function Logo({ onClick }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none" onClick={onClick}>
      <div className="px-3 py-1 rounded-full bg-duolingo-blue text-white font-duolingo text-lg shadow-duolingo">AI</div>
      <div className="text-2xl font-duolingo font-bold text-duolingo-blue tracking-tight">Lingo</div>
    </div>
  );
}


