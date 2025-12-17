export function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#e8ecf1] to-[#f5f7fa]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-600 bg-blue-100/80 rounded-full border border-blue-200">
            How it works?
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            <span className="text-gray-400 font-medium">A </span>
            <span className="relative inline-block">
              Simple
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-200/70 -z-10 rounded"></span>
            </span>
            <span>, </span>
            <span className="relative inline-block">
              Non-Disruptive 3-Week
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-200/70 -z-10 rounded"></span>
            </span>
            <br />
            <span>Process</span>
          </h2>

          <p className="text-base lg:text-lg text-gray-700 mt-4">
            <span className="font-semibold text-gray-900">Fast</span>
            <span>, </span>
            <span className="font-semibold text-gray-900">structured,</span>
            <span className="text-gray-600 font-normal"> and </span>
            <span className="font-semibold text-gray-900">low-friction.</span>
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Week 1 - Top Left */}
            <div className="flex justify-start">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-sm max-w-sm">
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="font-bold text-xs mb-4 tracking-wider">WEEK 1</div>
                <div className="bg-blue-100/60 rounded-2xl p-6 border-t-2 border-blue-400">
                  <h3 className="font-bold text-lg lg:text-xl mb-3 tracking-tight">Discovery</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Interviews, document review, initial scans, early insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting line 1 */}
            <div className="hidden lg:block relative h-24 -my-8">
              <svg
                className="absolute left-1/3 top-0 w-1/2 h-full"
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 0 0 Q 150 50 300 100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
              </svg>
            </div>

            {/* Week 2 - Right */}
            <div className="flex justify-end">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-sm max-w-sm">
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="font-bold text-sm mb-4 tracking-wide">WEEK 2</div>
                <div className="bg-blue-100/60 rounded-2xl p-6 border-t-2 border-blue-400">
                  <h3 className="font-bold text-xl mb-3">Deep Analysis</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Security testing, compliance review, infrastructure analysis, vendor/cost evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting line 2 */}
            <div className="hidden lg:block relative h-24 -my-8">
              <svg
                className="absolute right-1/3 top-0 w-1/2 h-full"
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 300 0 Q 150 50 0 100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
              </svg>
            </div>

            {/* Week 3 - Bottom Left */}
            <div className="flex justify-start lg:ml-24">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-sm max-w-sm">
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="font-bold text-sm mb-4 tracking-wide">WEEK 3</div>
                <div className="bg-blue-100/60 rounded-2xl p-6 border-t-2 border-blue-400">
                  <h3 className="font-bold text-xl mb-3">Reporting</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Executive summary, full findings, risk matrix, remediation roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
