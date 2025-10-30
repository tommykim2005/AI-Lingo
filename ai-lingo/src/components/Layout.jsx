import { NavBar } from './NavBar';

export function Layout({ children, onNavigate }) {
  return (
    <div className="min-h-screen bg-duolingo-gray-light">
      <NavBar onNavigate={onNavigate} />
      <main className="pt-16">{children}</main>
    </div>
  );
}


