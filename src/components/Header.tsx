import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';

export default function Header() {
  const [logoUrl, setLogoUrl] = useState('logo.png');
  const [title, setTitle] = useState('Build India Group');
  const [tagline, setTagline] = useState('cultivating good citizenry');
  
  useEffect(() => {
    const settings = storage.getSiteSettings();
    setLogoUrl(settings.logoUrl || 'logo.png');
    setTitle(settings.title || 'Build India Group');
    setTagline(settings.tagline || 'cultivating good citizenry');
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo & Site Title */}
          <Link to="/" className="flex items-center gap-3">
            <img src={`/${logoUrl}`} alt="Build India Group" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">{title}</span>
              <span className="text-sm text-green-600 italic">{tagline}</span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/programs" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Programs
            </Link>
            <Link to="/pledges" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Pledges
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
