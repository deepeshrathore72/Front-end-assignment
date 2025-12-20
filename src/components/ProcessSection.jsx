export function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#e8f0f8] to-[#dce8f4]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(200, 210, 230, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(200, 210, 230, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px'
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 mb-6 text-xs font-semibold text-blue-600 bg-blue-100/70 rounded-full border border-blue-300/50">
            How it works?
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-gray-900">
            <span className="text-gray-400 font-medium">A </span>
            <span className="relative inline-block">
              Simple
              <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-400/90 blur-[2px]"></span>
            </span>
            <span>, </span>
            <span className="relative inline-block">
              Non-Disru
              <span className="absolute bottom-0 left-2 right-1 h-1.5 bg-blue-400/90 blur-[2px]"></span>
            </span>
            <span className="relative inline-block">
              ptive 3-Week
              <span className="absolute bottom-0 left-4 right-0 h-1.5 bg-blue-400/90 blur-[2px]"></span>
            </span>
            <br />
            <span className="relative inline-block">
              Process
              <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-400/90 blur-[2px]"></span>
            </span>
          </h2>

          <p className="text-base lg:text-lg text-gray-700 mt-4">
            <span className="font-semibold text-gray-900">Fast</span>
            <span className="text-gray-500">, </span>
            <span className="font-semibold text-gray-900">structured,</span>
            <span className="text-gray-500 font-normal"> and </span>
            <span className="font-semibold text-gray-900">low-friction.</span>
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-175">
          {/* Background shape behind Week 1 and Week 3 */}
          <div 
            className="hidden lg:block absolute top-5 -left-30 w-120 h-150 rounded-3xl -z-10"
            style={{
              background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.5) 0%, rgba(147, 197, 253, 0.2) 40%, rgba(147, 197, 253, 0) 70%)'
            }}
          ></div>
          
          {/* Background shape behind Week 2 */}
          <div 
            className="hidden lg:block absolute top-30 -right-20 w-120 h-150 rounded-3xl -z-10"
            style={{
              background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.5) 0%, rgba(147, 197, 253, 0.2) 40%, rgba(147, 197, 253, 0) 70%)'
            }}
          ></div>

          {/* Week 1 - Top Left */}
          <div className="absolute top-0 left-0 lg:left-12">
            <div 
              className="relative bg-white/80 backdrop-blur-sm rounded-4xl p-5 border border-gray-200/60 shadow-md w-60">
              <div className="absolute top-1.5 right-1/2 translate-x-1/2 w-2.5 h-2.5 bg-gray-800 rounded-full"></div>
              <div className="font-bold text-md mb-3 tracking-wider text-gray-900">WEEK 1</div>
              <div className="bg-blue-100 rounded-2xl p-0 border border-blue-600">
                <h3 className="font-bold text-md mb-2 text-gray-900 p-4 pb-0.5">Discovery</h3>
                <div className="w-full h-0.5 bg-blue-600 mb-2"></div>
                <p className="text-sm text-gray-800 leading-relaxed p-4 pt-1">
                  Interviews, document review, initial scans, early insights.
                </p>
              </div>
            </div>
          </div>

          {/* Connecting line 1 - curved line from Week 1 to Week 2 */}
          <svg
            className="hidden lg:block absolute top-10.5 left-73 w-85 h-62.5 pointer-events-none"
            viewBox="0 0 300 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M -20 0 C 120 80, 120 200, 350 230" stroke="black" strokeWidth="2" strokeDasharray="10 10" fill="none" />
          </svg>

          {/* Week 2 - Right */}
          <div className="absolute top-62.5 right-0 lg:right-12">
            <div 
              className="relative bg-white/80 backdrop-blur-sm rounded-4xl p-5 border border-gray-200/60 shadow-md w-60">
              <div className="absolute top-1.5 right-1/2 translate-x-1/2 w-2.5 h-2.5 bg-gray-800 rounded-full"></div>
              <div className="font-bold text-md mb-3 tracking-wider text-gray-900">WEEK 2</div>
              <div className="bg-blue-100 rounded-2xl border border-blue-600">
                <h3 className="font-bold text-md mb-2 text-gray-900 p-4 pb-0.5">Deep Analysis</h3>
                <div className="w-full h-0.5 bg-blue-600 mb-2"></div>
                <p className="text-sm text-gray-800 leading-relaxed p-4 pt-1 pb-2">
                  Security testing, compliance review, infrastructure analysis, vendor/cost evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Connecting line 2 - curved line from Week 2 to Week 3 */}
          <svg
            className="hidden lg:block absolute top-87.5 left-67.5  w-95 h-62.5 pointer-events-none"
            viewBox="0 0 300 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 300 30 C 110 60, 160 90, -20 150" stroke="black" strokeWidth="2" strokeDasharray="10 10" fill="none" />
          </svg>

          {/* Week 3 - Bottom Left */}
          <div className="absolute top-125 left-0 lg:left-24">
            <div 
              className="relative bg-white/80 backdrop-blur-sm rounded-4xl p-5 border border-gray-200/60 shadow-md w-60">
              <div className="absolute top-1.5 right-1/2 translate-x-1/2 w-2.5 h-2.5 bg-gray-800 rounded-full"></div>
              <div className="font-bold text-md mb-3 tracking-wider text-gray-900">WEEK 3</div>
              <div className="bg-blue-100 rounded-2xl border border-blue-600">
                <h3 className="font-bold text-md mb-2 text-gray-900 p-4 pb-0.5">Reporting</h3>
                <div className="w-full h-0.5 bg-blue-600 mb-2"></div>
                <p className="text-sm text-gray-800 leading-relaxed p-4 pt-1">
                  Executive summary, full findings, risk matrix, remediation roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
