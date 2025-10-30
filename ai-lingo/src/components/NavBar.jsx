import { Button } from './Button';
import { Logo } from './Logo';
import { getCurrentUser, logout } from './auth';

export function NavBar({ onNavigate }) {
  const currentUser = getCurrentUser();
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 bg-white/90 backdrop-blur flex items-center">
      <div className="max-w-5xl mx-auto w-full px-4 flex items-center justify-between">
        <Logo onClick={() => onNavigate('/')} />
        <div className="flex items-center gap-2">
          {currentUser ? (
            <>
              <Button onClick={() => onNavigate('/lessons')}>Lessons</Button>
              <Button onClick={() => { logout(); onNavigate('/'); }}>Log out</Button>
            </>
          ) : (
            <>
              <Button onClick={() => onNavigate('/login')}>Login</Button>
              <Button onClick={() => onNavigate('/login')}>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


