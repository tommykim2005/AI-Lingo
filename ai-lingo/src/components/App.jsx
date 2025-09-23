import { Hero } from './hero';
import { Button } from './button';

export default function App() {
  return (
    <div>
      <Hero
        title="Learn with Fun!"
        subtitle="5 minutes a day is all it takes"
      >
        <Button>Start Lesson</Button>
      </Hero>
    </div>
  );
}
