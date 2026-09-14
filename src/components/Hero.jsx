import { MessageCircle, Phone, Snowflake, Wind } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-bright-blue" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating snowflakes */}
        <Snowflake
          className="absolute top-[15%] left-[10%] text-white/5 animate-float"
          size={80}
        />
        <Snowflake
          className="absolute top-[60%] right-[8%] text-white/5 animate-float delay-200"
          size={120}
        />
        <Snowflake
          className="absolute bottom-[20%] left-[25%] text-white/5 animate-float delay-400"
          size={60}
        />
        <Wind
          className="absolute top-[30%] right-[20%] text-white/5 animate-float delay-300"
          size={100}
        />
        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-bright-blue/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/10">
          <Snowflake size={16} className="text-blue-300" />
          Professional AC Solutions — Island Wide
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
          Split AC Service
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            & Installation
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/80 font-light mb-10 animate-fade-in-up delay-200">
          Your Comfort, Our Priority
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="https://wa.me/94764884688?text=Hi%20Delvex%2C%20I%20need%20AC%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4"
          >
            <MessageCircle size={22} />
            WhatsApp Us
          </a>
          <a
            href="tel:+94764884688"
            className="btn-outline text-lg px-8 py-4"
          >
            <Phone size={22} />
            Call Now
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex items-center justify-center gap-8 text-white/50 text-sm animate-fade-in-up delay-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-whatsapp rounded-full" />
            Island Wide Coverage
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            Professional Technicians
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            Transparent Pricing
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 100, 720 0, 1080 60 C1260 90, 1380 70, 1440 50 L1440 100 L0 100 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
