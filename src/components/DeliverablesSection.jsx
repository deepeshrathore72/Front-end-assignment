import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { ArrowRight, CircleArrowRight } from 'lucide-react';

const deliverables = [
  {
    title: "Executive Summary",
    description: "Top risks, priorities, recommendations.",
  },
  {
    title: "Scorecard",
    description: "Security, compliance, infrastructure, operations.",
  },
  {
    title: "Full Findings Report",
    description: "Detailed analysis and evidence.",
  },
  {
    title: "90-Day Roadmap",
    description: "Milestones, KPIs, responsibilities.",
  },
];

export function DeliverablesSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#f5f7fa] to-[#e8ecf1]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(200, 210, 230, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(200, 210, 230, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px'
      }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* bluish shade in the Background */}
            <div 
              className="hidden lg:block absolute -top-30 -left-80 w-150 h-170 rounded-3xl -z-10"
              style={{
                background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.5) 0%, rgba(147, 197, 253, 0.2) 40%, rgba(147, 197, 253, 0) 70%)'
              }}
            ></div>

            <div 
              className="hidden lg:block absolute -top-30 -right-190 w-130 h-150 rounded-3xl -z-10"
              style={{
                background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.5) 0%, rgba(147, 197, 253, 0.2) 40%, rgba(147, 197, 253, 0) 70%)'
              }}
            ></div>

            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-600 bg-blue-100/80 rounded-full border border-blue-200">
              Your deliverables
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="text-gray-400 font-medium">Clear</span>
              <br />
              <span className="relative inline-block">
                Documentation
                  <span className="absolute bottom-0.5 left-4 right-4 h-1.5 bg-blue-400/90 blur-[2px]"></span>
              </span>
              <br />
              <span className="text-gray-400 font-medium">You </span>
              <span className="relative inline-block">Can Act On.
                <span className="absolute bottom-0.5 left-4 right-4 h-1.5 bg-blue-400/90 blur-[2px]"></span>
              </span>
            </h2>

            <p className="text-base lg:text-lg mb-8 text-gray-700">
              <span className="text-gray-600 font-normal">Fast, </span>
              <span className="font-semibold text-gray-900">structured</span>
              <span className="text-gray-600 font-normal">, and </span>
              <span className="font-semibold text-gray-900">low-friction.</span>
            </p>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all">
              Book an Assessment <CircleArrowRight className="size-5" />
            </Button>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-blue-300 border border-blue-300"></div>

            <div className="space-y-6">
              {deliverables.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Checkmark on the line */}
                  <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center z-10 shrink-0 shadow-[0_0_15px_5px_rgba(147,197,253,0.4)]">
                    <Check className="h-5 w-5 text-gray-800" strokeWidth={2.5} />
                  </div>
                  {/* Card */}
                  <div className="ml-4 bg-white/90 backdrop-blur-sm rounded-3xl px-6 py-5 border-2 border-blue-300 shadow-md flex-1">
                    <h3 className="font-bold text-lg lg:text-xl mb-1 text-gray-900 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
