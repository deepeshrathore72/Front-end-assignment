import { Button } from './ui/Button';
import { Check } from 'lucide-react';

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
    <section className="py-20 px-6 bg-linear-to-b from-[#f5f7fa] to-[#e8ecf1]">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-600 bg-blue-100/80 rounded-full border border-blue-200">
              Your deliverables
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="text-gray-400 font-medium">Clear</span>
              <br />
              <span className="relative inline-block">
                Documentation
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-200/70 -z-10 rounded"></span>
              </span>
              <br />
              <span className="text-gray-400 font-medium">You </span>
              <span>Can Act On.</span>
            </h2>

            <p className="text-base lg:text-lg mb-8 text-gray-700">
              <span className="text-gray-600 font-normal">Fast, </span>
              <span className="font-semibold text-gray-900">structured</span>
              <span className="text-gray-600 font-normal">, and </span>
              <span className="font-semibold text-gray-900">low-friction.</span>
            </p>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all">
              Book an Assessment
            </Button>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-blue-300/50"></div>

            <div className="space-y-8">
              {deliverables.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="absolute left-0 w-12 h-12 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center z-10 shadow-sm">
                    <Check className="h-5 w-5 text-blue-600" strokeWidth={3} />
                  </div>
                  <div className="ml-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm flex-1">
                    <h3 className="font-bold text-lg lg:text-xl mb-2 text-gray-900 tracking-tight">{item.title}</h3>
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
