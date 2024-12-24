import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Recipe Viewer</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/favorites" className="hover:text-gray-400">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}
