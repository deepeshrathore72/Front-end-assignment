import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#0a1628" />
                    <path
                      d="M20 10 L20 30 M15 15 L20 20 L25 15 M15 25 L20 20 L25 25"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-white">
                <div className="text-xl font-bold tracking-wide">WENDIGO</div>
                <div className="text-[10px] tracking-[0.2em] opacity-60">ADVISORS</div>
              </div>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed max-w-xs">
              Fractional CIO Services & Strategic IT Advisory for Healthcare Organizations
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide">SERVICES</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fractional CIO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CIO360™ Assessment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IT Health Check
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide">RESOURCES</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog/Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Healthcare IT Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Templates & Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide">COMPANY</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 Wendigo Advisors. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
