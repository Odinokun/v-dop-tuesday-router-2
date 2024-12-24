import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Aside />

      <main className='main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
