import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 lg:row-span-2">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-3">
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
            <p className="text-xs text-white/60 mb-6 leading-relaxed max-w-xs">
              Fractional CIO Services & Strategic IT Advisory for Healthcare Organizations
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-right">
            <h3 className="font-bold text-xs mb-3 tracking-[0.15em]">SERVICES</h3>
            <ul className="space-y-2 text-xs text-white/60">
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
          <div className="text-right">
            <h3 className="font-bold text-xs mb-3 tracking-[0.15em]">RESOURCES</h3>
            <ul className="space-y-2 text-xs text-white/60">
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
            </ul>
          </div>

          {/* About - below Services */}
          <div className="text-right">
            <h3 className="font-bold text-xs mb-3 tracking-[0.15em]">ABOUT</h3>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact - below Resources */}
          <div className="text-right">
            <h3 className="font-bold text-xs mb-3 tracking-[0.15em]">CONTACT</h3>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 pb-none">
          <p className="text-center text-xs text-white/50">
            © Copyright 2025, All Rights Reserved by Wendigo Advisors.
          </p>
        </div>
      </div>
    </footer>
  );
}
