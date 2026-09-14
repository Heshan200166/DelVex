import { Wrench, ShieldCheck, AlertTriangle, Gauge, Lightbulb } from 'lucide-react'

const servicesData = [
  {
    icon: Wrench,
    title: 'Split AC Installation',
    items: [
      'Residential installation',
      'Office installation',
      'Professional & safe installation',
      'Indoor and outdoor unit setup',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'AC Maintenance',
    items: [
      'Regular servicing',
      'Cleaning',
      'Performance checking',
      'Preventive maintenance',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Breakdown & Repairs',
    items: [
      'AC not cooling',
      'Water leakage',
      'Strange noises',
      'Power issues',
      'General AC problems',
    ],
  },
  {
    icon: Gauge,
    title: 'Gas Charging',
    items: [
      'Gas checking',
      'Gas top-up',
      'Leak checking',
      'Refrigerant-related services',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Design & Supply',
    items: [
      'AC system consultation',
      'Air conditioner supply',
      'Design recommendations',
      'Installation planning',
    ],
  },
]

const ServiceCard = ({ icon: Icon, title, items, index }) => (
  <div
    className="service-card group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Icon */}
    <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-bright-blue transition-colors duration-300">
      <Icon
        size={28}
        className="text-bright-blue group-hover:text-white transition-colors duration-300"
      />
    </div>

    {/* Title */}
    <h3 className="font-heading text-xl font-bold text-navy mb-4">
      {title}
    </h3>

    {/* Items list */}
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
          <span className="w-1.5 h-1.5 bg-bright-blue rounded-full mt-1.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-bright-blue font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive split AC solutions for residential and commercial spaces across Sri Lanka
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
