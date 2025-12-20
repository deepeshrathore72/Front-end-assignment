import { Button } from './ui/Button';
import { ArrowRight, CircleArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-40 pb-16 px-6 bg-linear-to-b from-[#e8f0f8] to-[#f0f5fa]"
      style={{
              backgroundImage: `
                linear-gradient(to right, rgba(200, 210, 230, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(200, 210, 230, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '36px 36px'
            }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Services</span>
              <span className="mx-2.5 text-gray-400 text-lg">›</span>
              <span className="font-semibold text-gray-900 text-sm">IT Health Check</span>
            </div>

            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold text-blue-600 bg-blue-100/70 rounded-full border border-blue-300/50">
              IT HEALTH CHECK
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold mb-7 leading-[1.15] text-gray-900">
              <span className="block">
                <span className="relative inline-block">
                  Know Exactly
                  <span className="absolute bottom-0.5 left-0 right-9 h-2 bg-blue-400/90 blur-[2px]"></span>
                </span>
              </span>
              <span className="block">
                <span className="relative inline-block">
                  Where Your IT
                  <span className="absolute bottom-0.5 left-0 right-3 h-2 bg-blue-400/90 blur-[2px]"></span>
                </span>
              </span>
              <span className="block">
                <span className="relative inline-block">
                  Stands.
                  <span className="absolute bottom-0.5 left-0 right-3 h-2 bg-blue-400/90 blur-[2px]"></span>
                </span>
              </span>
            </h1>

            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              <span className="font-normal">A </span>
              <span className="font-bold text-gray-900">2-3 week assessment</span>
              <span className="font-normal"> giving </span>
              <span className="font-bold text-gray-900">healthcare</span>
              <br />
              <span className="font-bold text-gray-900">leaders clear</span>
              <span className="font-normal">, </span>
              <span className="font-bold text-gray-900">actionable insight</span>
              <span className="font-normal"> into </span>
              <span className="font-bold text-gray-900">their</span>
              <br />
              <span className="font-bold text-gray-900">technology</span>
              <span className="font-normal"> minus the jargon</span>
            </p>

            <Button size="none" className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-12 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
              <span className='text-white/90'>Take Assessment</span> <CircleArrowRight className="size-5" />
            </Button>
          </div>

          <div className="relative max-w-md ml-auto mr-0">
            <div className="absolute -inset-8 bg-linear-to-br from-blue-200/40 to-blue-300/30 rounded-[3.5rem] blur-3xl"></div>
            <div className="relative bg-linear-to-br from-blue-100/50 to-blue-200/40 rounded-[3rem] p-6 border-2 border-white/60 backdrop-blur-sm shadow-xl">
              <img
                src="/hero-image.png"
                alt="Person writing checklist"
                className="rounded-4xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
