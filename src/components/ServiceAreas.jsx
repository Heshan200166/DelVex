import { MapPin } from 'lucide-react'

const areas = ['Colombo', 'Matara', 'Dickwella', 'Tangalle', 'Belihattha']

const ServiceAreas = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block text-bright-blue font-semibold text-sm uppercase tracking-widest mb-3">
          Coverage
        </span>
        <h2 className="section-title">
          We are at your service —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-blue to-navy">
            Island Wide
          </span>
        </h2>
        <p className="section-subtitle mb-10">
          Providing professional AC services across key locations in Sri Lanka
        </p>

        {/* Area Chips */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {areas.map((area, index) => (
            <div
              key={area}
              className="area-chip"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MapPin size={18} className="text-bright-blue" />
              {area}
            </div>
          ))}
        </div>

        {/* Map Pin Visual */}
        <div className="mt-12 flex items-center justify-center gap-3 text-gray-400 text-sm">
          <MapPin size={16} className="text-bright-blue" />
          <span>And expanding our reach across Sri Lanka</span>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
