import { Button } from './ui/Button';

export function CTASection() {
  return (
    <section className="py-16 px-6 bg-linear-to-b from-[#e8ecf1] to-[#0d2441]">
      <div className="mx-auto max-w-6xl">
        <div 
          className="relative overflow-hidden rounded-[3rem] p-12 lg:p-16 text-center shadow-2xl"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1px),
              linear-gradient(to bottom, #4a9ff5, #5aabf7, #7bbffa)
            `,
            backgroundSize: '24px 24px, 100% 100%'
          }}
        >
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-white bg-white/20 rounded-full border border-white/40 backdrop-blur-sm">
              From a CEO
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Ready to bring clarity to your IT?
            </h2>

            <p className="text-base lg:text-lg text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Let's talk about your challenges, identify your risks, and give you a clear path forward — no jargon, no
              pressure.
            </p>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
