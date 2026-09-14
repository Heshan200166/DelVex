import { useState } from 'react'
import {
  MessageCircle,
  Phone,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from 'lucide-react'

const contactNumbers = {
  whatsapp: [
    { display: '076 488 4688', link: 'https://wa.me/94764884688?text=Hi%20Delvex%2C%20I%20need%20AC%20service' },
    { display: '078 392 0262', link: 'https://wa.me/94783920262?text=Hi%20Delvex%2C%20I%20need%20AC%20service' },
  ],
  call: [
    { display: '076 488 4688', link: 'tel:+94764884688' },
    { display: '074 162 5403', link: 'tel:+94741625403' },
  ],
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Visual only — no backend submission for this phase
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-light-blue">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-bright-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Reach out to us for any AC service needs — we're just a call or message away
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-xl font-bold text-navy mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-whatsapp/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={36} className="text-whatsapp" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-500">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1.5">
                    Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-bright-blue focus:ring-2 focus:ring-bright-blue/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="07X XXX XXXX"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-bright-blue focus:ring-2 focus:ring-bright-blue/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-3 top-3.5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your AC service needs..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-bright-blue focus:ring-2 focus:ring-bright-blue/20 outline-none transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-heading text-lg font-bold text-navy mb-5 flex items-center gap-2">
                <MessageCircle size={22} className="text-whatsapp" />
                WhatsApp
              </h3>
              <div className="space-y-3">
                {contactNumbers.whatsapp.map((num) => (
                  <a
                    key={num.display}
                    href={num.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-whatsapp/5 hover:bg-whatsapp/10 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-whatsapp/10 rounded-full flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors">
                      <MessageCircle size={18} className="text-whatsapp" />
                    </div>
                    <span className="text-navy font-medium">{num.display}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Call */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-heading text-lg font-bold text-navy mb-5 flex items-center gap-2">
                <Phone size={22} className="text-bright-blue" />
                Call Us
              </h3>
              <div className="space-y-3">
                {contactNumbers.call.map((num) => (
                  <a
                    key={num.display}
                    href={num.link}
                    className="flex items-center gap-3 p-3 rounded-lg bg-bright-blue/5 hover:bg-bright-blue/10 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-bright-blue/10 rounded-full flex items-center justify-center group-hover:bg-bright-blue/20 transition-colors">
                      <Phone size={18} className="text-bright-blue" />
                    </div>
                    <span className="text-navy font-medium">{num.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
