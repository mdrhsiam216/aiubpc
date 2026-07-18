import { type ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Link } from 'wouter';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 page-enter">{children}</main>
      <footer className="text-white" style={{ backgroundColor: '#2988c6' }}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <p className="font-serif text-sm tracking-wide">AIUB Photography Club</p>
              <p className="text-xs text-white/50 mt-1">A Window To See the World</p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/50">
              <a href="tel:+8801854056655" className="hover:text-white">01854056655</a>
              <a href="mailto:aiubphotographyclub@gmail.com" className="hover:text-white">aiubphotographyclub@gmail.com</a>
              <a href="https://www.instagram.com/aiubpcofficial" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.facebook.com/AIUBPC" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            </div>

            <nav className="flex gap-5 text-xs text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/team" className="hover:text-white">Team</Link>
              <Link href="/partners" className="hover:text-white">Partners</Link>
            </nav>
          </div>

          <div className="border-t border-white/10 mt-6 pt-5 text-center text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} AIUB Photography Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
