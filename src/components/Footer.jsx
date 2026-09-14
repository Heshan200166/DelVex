import { MessageCircle, Phone, Facebook } from 'lucide-react'
import logo from '../../Pics/logo.jpg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Delvex Engineering"
              className="h-16 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your Comfort, Our Priority — Professional split AC installation,
              service & maintenance across Sri Lanka.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Quick Contact</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/94764884688?text=Hi%20Delvex%2C%20I%20need%20AC%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-whatsapp transition-colors text-sm"
              >
                <MessageCircle size={16} />
                076 488 4688
              </a>
              <a
                href="https://wa.me/94783920262?text=Hi%20Delvex%2C%20I%20need%20AC%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-whatsapp transition-colors text-sm"
              >
                <MessageCircle size={16} />
                078 392 0262
              </a>
              <a
                href="tel:+94764884688"
                className="flex items-center gap-3 text-white/70 hover:text-bright-blue transition-colors text-sm"
              >
                <Phone size={16} />
                076 488 4688
              </a>
              <a
                href="tel:+94741625403"
                className="flex items-center gap-3 text-white/70 hover:text-bright-blue transition-colors text-sm"
              >
                <Phone size={16} />
                074 162 5403
              </a>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Follow Us</h4>
            <div className="flex items-center gap-4 mb-6">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bright-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              {/* TikTok */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bright-blue transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.1v-3.51a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
              </a>
            </div>
            <p className="text-white/40 text-xs">
              Delvex Engineering on Facebook & TikTok
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Delvex Engineering. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Installation | Service | Maintenance
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
