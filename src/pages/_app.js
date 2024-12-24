

import Navbar from '../components/Navbar'; // Import the Navbar component
import '../styles/globals.css'; // Import global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Navbar appears on all pages */}
      <main className="container mx-auto p-4">
        <Component {...pageProps} /> {/* Render the page content */}
      </main>
    </>
  );
}
