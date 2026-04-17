import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const prices = [
  {
    title: "Брендинг на мероприятия",
    price: "от 70 000 руб.",
  },
  {
    title: "Оформление свадебной церемонии",
    price: "от 60 000 руб.",
  },
  {
    title: "Застройка декораций на съемочной площадке",
    price: "от 100 000 руб.",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стоимость</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Цены на наши <HighlightedText>услуги</HighlightedText>
          </h2>
        </div>

        <div className="divide-y divide-border">
          {prices.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-8 group"
            >
              <div className="flex items-center gap-6">
                <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                <h3 className="text-xl md:text-2xl font-medium">{item.title}</h3>
              </div>
              <span className="text-2xl md:text-3xl font-medium text-foreground sm:text-right pl-10 sm:pl-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Прайс на различные услуги может обговариваться в личном порядке напрямую с менеджером проекта.
          </p>
          <a
            href="https://t.me/Offerri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-foreground text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-foreground/80 transition-colors duration-300 group shrink-0"
          >
            Обсудить стоимость
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}