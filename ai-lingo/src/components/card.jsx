export function DuolingoCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-duolingo-md p-6 max-w-sm">
      <h2 className="text-xl font-duolingo font-bold mb-2 text-duolingo-green">
        {title}
      </h2>
      <div className="text-duolingo-gray">{children}</div>
    </div>
  );
}
