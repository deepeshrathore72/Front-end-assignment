import { Shield, ClipboardCheck, Network, DollarSign, Settings, TrendingUp } from 'lucide-react';

const areas = [
  {
    title: "Security",
    description: "We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap.",
    icon: Shield,
  },
  {
    title: "Compliance",
    description: "We assess your HIPAA compliance status and evaluate your audit readiness.",
    icon: ClipboardCheck,
  },
  {
    title: "Infrastructure",
    description: "We examine system health, identify legacy risks, and analyze scalability for growth.",
    icon: Network,
    fullWidth: true,
  },
  {
    title: "Operations",
    description: "We evaluate IT team capabilities, incident management, and disaster recovery readiness.",
    icon: Settings,
  },
  {
    title: "Cost",
    description: "We review your technology spending to identify cost optimization opportunities.",
    icon: DollarSign,
  },
  {
    title: "Strategy",
    description: "We assess how your IT roadmap aligns with business goals and identify capability gaps.",
    icon: TrendingUp,
  },
];

export function CriticalAreasSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#f5f7fa] to-[#e8ecf1]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-600 bg-blue-100/80 rounded-full border border-blue-200">
            What you get
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="relative inline-block">
              #6 Critical Areas
              <span className="absolute bottom-1 left-0 right-0 h-4 bg-blue-200/70 -z-10 rounded"></span>
            </span>{" "}
            <span className="text-gray-400 font-medium">We</span>{" "}
            <span className="relative inline-block">
              Examine.
              <span className="absolute bottom-1 left-0 right-0 h-4 bg-blue-200/70 -z-10 rounded"></span>
            </span>
          </h2>

          <p className="text-base lg:text-lg text-gray-700 mt-4">
            <span className="font-semibold text-gray-900">Every critical part</span>
            <span className="text-gray-600 font-normal"> of your </span>
            <span className="font-semibold text-gray-900">IT environment reviewed</span>
            <span className="text-gray-600 font-normal"> and </span>
            <span className="font-semibold text-gray-900">explained clearly</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow ${
                  area.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute -top-6 right-8 bg-blue-100/70 rounded-2xl p-4 border border-blue-200/50 shadow-sm">
                  <Icon className="h-7 w-7 text-gray-800" strokeWidth={1.5} />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 tracking-tight">{area.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
