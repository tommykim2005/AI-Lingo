import { Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { getCurrentUser } from '../components/auth';

export default function Home({ onStart }) {
  const user = getCurrentUser();
  return (
    <Hero
      title="Learn Digital Literacy"
      subtitle="Short, interactive lessons for kids and seniors"
    >
      <Button onClick={() => onStart(user ? '/lessons' : '/login')}>
        {user ? 'Continue Learning' : 'Get Started'}
      </Button>
    </Hero>
  );
}


