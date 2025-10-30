export function DuolingoCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-duolingo-md p-6 max-w-sm border border-duolingo-blue-light/40">
      <h2 className="text-xl font-duolingo font-bold mb-2 text-duolingo-blue">
        {title}
      </h2>
      <div className="text-duolingo-gray">{children}</div>
    </div>
  );
}
