import { ClipboardCheck, FileCheck } from 'lucide-react'

const TestReport = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-navy via-navy-light to-bright-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <ClipboardCheck size={40} className="text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Service Test Report
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Every service comes with a{' '}
              <span className="text-cyan-300 font-semibold">Test Report</span>{' '}
              for full transparency. We document everything so you have complete
              peace of mind about the work done on your AC system.
            </p>
          </div>

          {/* Decorative icon */}
          <div className="hidden lg:block flex-shrink-0">
            <FileCheck size={64} className="text-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestReport
