import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
// import logo from '@/assets/logo.png';

import navLogo from '@/assets/logo.png'

const links = [
  { href: '/', label: 'Home', testid: 'link-nav-home' },
  { href: '/about', label: 'About', testid: 'link-nav-about' },
  { href: '/partners', label: 'Partners', testid: 'link-nav-partners' },
  { href: '/team', label: 'Team', testid: 'link-nav-team' },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20"
      style={{ backgroundColor: '#2988c6' }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group" data-testid="link-home-logo" onClick={() => setOpen(false)}>
          <img src={navLogo} alt="AIUBPC Logo" className="h-14 w-auto group-hover:opacity-80 transition-opacity duration-200" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-widest uppercase text-white pb-1 ${
                location === l.href ? 'border-b-2 border-white' : 'hover:opacity-80'
              }`}
              data-testid={l.testid}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.aiubpc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2988c6] hover:bg-white/90 text-sm tracking-widest uppercase px-6 py-2.5 font-semibold transition-colors"
            data-testid="link-nav-submit"
          >
            Submit - TOD IV
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          data-testid="btn-mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t backdrop-blur-md border-white/20"
          style={{ backgroundColor: '#2988c6' }}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-widest uppercase py-2 text-white ${
                  location === l.href ? 'border-b-2 border-white inline-block w-fit' : 'hover:opacity-80'
                }`}
                data-testid={l.testid}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.aiubpc.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-white text-[#2988c6] hover:bg-white/90 text-sm tracking-widest uppercase px-6 py-3 font-semibold transition-colors text-center mt-2"
              data-testid="link-nav-submit"
            >
              Submit - TOD IV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
