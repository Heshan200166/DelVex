import { ThumbsUp, Users, Award, Zap } from 'lucide-react'

const badges = [
  {
    icon: ThumbsUp,
    title: 'Reliable Service',
    description: 'Dependable support whenever you need it — we show up on time, every time.',
  },
  {
    icon: Users,
    title: 'Skilled Technicians',
    description: 'Trained and experienced professionals who know every AC system inside out.',
  },
  {
    icon: Award,
    title: 'Quality Work',
    description: 'Every job is done to the highest standard with genuine parts and tools.',
  },
  {
    icon: Zap,
    title: 'Fair Price',
    description: 'Transparent pricing with no hidden costs — fast service and best quality guaranteed.',
  },
]

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 px-6 bg-light-blue">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-bright-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Why Delvex
          </span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Trusted by customers across Sri Lanka for professional AC solutions
          </p>
        </div>

        {/* Badge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className="badge-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-bright-blue to-navy rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
                  <Icon size={30} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-3">
                  {badge.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
