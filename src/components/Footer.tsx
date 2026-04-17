import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-foreground font-semibold text-xl tracking-wide">Гильдия декораторов</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Студия декора мероприятий. Корпоративные события, образовательные форумы, съёмки и свадебный декор.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Разделы</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Связаться</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Send" size={14} />
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Users" size={14} />
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="MessageCircle" size={14} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Гильдия декораторов. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
