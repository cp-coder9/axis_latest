import Router from './Router';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <div className='bg-background text-foreground'>
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App