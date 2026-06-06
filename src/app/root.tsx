import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import { Toaster } from 'sonner';
import './global.css';

export const links = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://ka-p.fontawesome.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://ka-p.fontawesome.com/releases/v6.3.0/css/pro.min.css?token=2c15cc0cc7" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Toaster position={isMobile ? 'top-center' : 'bottom-right'} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
