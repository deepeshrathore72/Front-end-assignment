import { Shield, ClipboardCheck, Network, DollarSign, Settings, TrendingUp } from 'lucide-react';

const areas = [
  {
    title: "Security",
    description: "We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap.",
    icon: Shield,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Compliance",
    description: "We assess your HIPAA compliance status and evaluate your audit readiness.",
    icon: ClipboardCheck,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Infrastructure",
    description: "We examine system health, identify legacy risks, and analyze scalability for growth.",
    icon: Network,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Operations",
    description: "We evaluate IT team capabilities, incident management, and disaster recovery readiness.",
    icon: Settings,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    title: "Cost",
    description: "We review your technology spending to identify cost optimization opportunities.",
    icon: DollarSign,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Strategy",
    description: "We assess how your IT roadmap aligns with business goals and identify capability gaps.",
    icon: TrendingUp,
    colSpan: 1,
    rowSpan: 1,
  },
];

export function CriticalAreasSection() {
  return (
    <section 
      className="py-20 px-6 bg-linear-to-b from-[#e8f0f8] to-[#dce8f4]"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(150, 170, 200, 0.5) 1.6px, transparent 1px),
          linear-gradient(to bottom, #e8f0f8, #dce8f4)
        `,
        backgroundSize: '36px 36px, 100% 100%'
      }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 mb-6 text-xs font-semibold text-blue-600 bg-blue-100/70 rounded-full border border-blue-300/50">
            What you get
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            <span className="relative inline-block">
              #6 Critical Areas
              <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-blue-400/90 blur-[2px]"></span>
            </span>{" "}
            <span className="text-gray-400 font-medium">We</span>{" "}
            <span className="relative inline-block">
              Examine.
              <span className="absolute -bottom-1 left-0 right-1 h-1.5 bg-blue-400/90 blur-[2px]"></span>
            </span>
          </h2>

          <p className="text-base lg:text-lg text-gray-700 mt-4">
            <span className="font-semibold text-gray-900">Every critical part</span>
            <span className="text-gray-500 font-normal"> of your </span>
            <span className="font-semibold text-gray-900">IT environment reviewed</span>
            <span className="text-gray-500 font-normal"> and </span>
            <span className="font-semibold text-gray-900">explained clearly</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md transition-all ${
                  area.colSpan === 2 ? "md:col-span-2" : ""
                } ${area.rowSpan === 2 ? "md:row-span-2" : ""}`}
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(200, 210, 230, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(200, 210, 230, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px'
                }}
              >
                <div className="absolute -top-5 right-8 bg-blue-100/80 rounded-xl p-3.5 border border-blue-200/50 shadow-sm">
                  <Icon className="h-6 w-6 text-gray-800" strokeWidth={1.5} />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{area.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
