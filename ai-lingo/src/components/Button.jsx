export function Button({ children }) {
  return (
    <button className="px-6 py-3 bg-duolingo-blue text-white font-duolingo font-bold rounded-2xl shadow-duolingo hover:bg-duolingo-blue-dark transition-colors duration-300 ease-in-out">

      {children}
    </button>
  );
}
