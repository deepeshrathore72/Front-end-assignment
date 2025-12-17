import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] px-6 py-3 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0a1628]" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="text-white">
              <div className="text-base font-bold tracking-wider">WENDIGO</div>
              <div className="text-[9px] tracking-[0.2em] opacity-70">ADVISORS</div>
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
            Services <ChevronDown className="h-4 w-4" />
          </button>
          <a href="/#" className="text-sm text-white/90 hover:text-white">
            Pricing
          </a>
          <a href="/#" className="text-sm text-white/90 hover:text-white">
            About Us
          </a>
          <a href="/#" className="text-sm text-white/90 hover:text-white">
            Testimonials
          </a>
          <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
            Resources <ChevronDown className="h-4 w-4" />
          </button>
        </nav>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all">Contact Us Free</Button>
      </div>
    </header>
  );
}
