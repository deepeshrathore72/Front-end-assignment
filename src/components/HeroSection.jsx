import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-linear-to-b from-[#e8ecf1] to-[#f5f7fa]">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-sm text-gray-500">Services</span>
              <span className="mx-2 text-gray-400">›</span>
              <span className="font-medium text-gray-900">IT Health Check</span>
            </div>

            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-600 bg-blue-100/80 rounded-full border border-blue-200">
              IT HEALTH CHECK
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight text-gray-900 tracking-tight">
              <span>Know Exactly</span>
              <br />
              <span className="relative inline-block">
                Where Your IT
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-200/70 -z-10 rounded"></span>
              </span>
              <br />
              <span>Stands.</span>
            </h1>

            <p className="text-base lg:text-lg mb-8 leading-relaxed">
              <span className="text-gray-600 font-normal">A </span>
              <span className="font-semibold text-gray-900">2-3 week assessment</span>
              <span className="text-gray-600 font-normal"> giving </span>
              <span className="font-semibold text-gray-900">healthcare</span>
              <br />
              <span className="font-semibold text-gray-900">leaders clear, </span>
              <span className="font-semibold text-gray-900">actionable insight </span>
              <span className="text-gray-600 font-normal">into </span>
              <span className="font-semibold text-gray-900">their</span>
              <br />
              <span className="font-semibold text-gray-900">technology </span>
              <span className="text-gray-600 font-normal"> </span>
              <span className="font-semibold text-gray-900">minus the jargon</span>
              <span className="text-gray-600 font-normal">.</span>
            </p>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all">
              Take Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative max-w-md lg:max-w-lg mx-auto">
            <div className="absolute inset-0 bg-linear-to-br from-blue-200/30 to-blue-300/30 rounded-[2.5rem] blur-3xl"></div>
            <div className="relative bg-blue-100/40 rounded-[2.5rem] p-6 border border-blue-200/60 backdrop-blur-sm">
              <img
                src="/hero-image.png"
                alt="Person writing checklist"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
