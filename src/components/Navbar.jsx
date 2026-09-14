import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import logo from '../../Pics/logo.jpg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-navy py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0">
          <img
            src={logo}
            alt="Delvex Engineering"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/94764884688?text=Hi%20Delvex%2C%20I%20need%20AC%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-whatsapp text-sm animate-pulse-glow"
        >
          <MessageCircle size={18} />
          WhatsApp Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-white/80 hover:text-white py-2 text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/94764884688?text=Hi%20Delvex%2C%20I%20need%20AC%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm w-full justify-center mt-2"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
