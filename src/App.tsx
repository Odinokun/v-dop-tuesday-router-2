import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { useWindowSize } from './helpers/useWindowSize';
import './App.css';

function App() {
  const size = useWindowSize();

  return (
    <div className='wrapper'>
      <Header />

      {size.width > 1024 ? <Aside /> : <h1>Burger</h1>}

      <main className='main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
