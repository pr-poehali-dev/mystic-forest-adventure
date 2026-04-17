import { useState, useEffect, MouseEvent } from "react"
import { cn } from "../lib/utils"
import Icon from "@/components/ui/icon"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
        scrolled || mobileMenuOpen
          ? "bg-primary backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
          : "bg-transparent py-4 top-0 left-0 right-0",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]">
        <a href="#projects" className="flex items-center gap-2 group">
          <span className="text-white font-medium text-sm tracking-[0.15em] uppercase">Портфолио</span>
        </a>

        <a href="/" className="flex items-center gap-2 group" onClick={scrollToTop}>
          <span className="text-white font-semibold text-lg tracking-wide">Гильдия декораторов</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#services"
            className="text-white text-sm tracking-wide hover:text-orange-200 transition-colors duration-300"
          >
            Услуги
          </a>
          <a
            href="https://t.me/Offerri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-200 transition-colors duration-300"
            aria-label="Telegram"
          >
            <Icon name="Send" size={18} />
          </a>
          <a
            href="https://vk.com/forrewoll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-200 transition-colors duration-300"
            aria-label="ВКонтакте"
          >
            <Icon name="Users" size={18} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-200 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <Icon name="MessageCircle" size={18} />
          </a>
        </div>

        <button
          className="md:hidden z-50 transition-colors duration-300 text-white"
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col gap-6 mb-8">
            {[
              { label: "Главная", href: "#hero" },
              { label: "О нас", href: "#about" },
              { label: "Портфолио", href: "#projects" },
              { label: "Услуги", href: "#services" },
              { label: "Цены", href: "#pricing" },
              { label: "Вопросы", href: "#faq" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-4xl font-light block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 mb-8">
            <a href="https://t.me/Offerri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200 transition-colors" onClick={closeMobileMenu}>
              <Icon name="Send" size={22} />
            </a>
            <a href="https://vk.com/forrewoll" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200 transition-colors" onClick={closeMobileMenu}>
              <Icon name="Users" size={22} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200 transition-colors" onClick={closeMobileMenu}>
              <Icon name="MessageCircle" size={22} />
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white transition-all duration-300 mb-4"
            onClick={closeMobileMenu}
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  )
}