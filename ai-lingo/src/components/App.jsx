import { Hero } from './hero';
import { Button } from './button';

export default function App() {
  return (
    <div style={{position: 'relative',minHeight:'100vh'}}>
    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
      <Button>Login</Button>
      </div>

      <Hero
        title="Learn with Fun!"
        subtitle="5 minutes a day is all it takes"
      >
        <Button>Start Lesson</Button>
      </Hero>
    </div>
  )
}
