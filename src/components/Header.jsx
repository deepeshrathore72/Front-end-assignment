import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="mx-auto max-w-6xl bg-[#0f1f33] rounded-full px-8 py-3.5 shadow-xl flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0f1f33]" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="text-white">
              <div className="text-lg font-bold tracking-[0.15em]">WENDIGO</div>
              <div className="text-[10px] tracking-[0.25em] opacity-60 -mt-0.5">ADVISORS</div>
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <button className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors">
            Services <ChevronDown className="h-4 w-4" />
          </button>
          <a href="/#" className="text-sm text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/#" className="text-sm text-white/80 hover:text-white transition-colors">
            About Us
          </a>
          <a href="/#" className="text-sm text-white/80 hover:text-white transition-colors">
            Testimonials
          </a>
          <button className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors">
            Resources <ChevronDown className="h-4 w-4" />
          </button>
        </nav>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-7 py-2.5 text-sm font-medium shadow-md hover:shadow-lg transition-all">Contact Us for Free</Button>
      </div>
    </header>
  );
}
