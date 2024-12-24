import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes/router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
