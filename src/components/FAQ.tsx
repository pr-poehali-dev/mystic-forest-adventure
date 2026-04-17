import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких городах вы работаете?",
    answer:
      "Мы работаем в Москве, Нижнем Новгороде и Казани, а также по всей России. Выезд в другой город — не проблема, обсудим детали индивидуально.",
  },
  {
    question: "Как рассчитывается стоимость оформления?",
    answer:
      "Стоимость зависит от типа мероприятия, площади, количества гостей и сложности декора. После первичной консультации мы подготовим точную смету.",
  },
  {
    question: "За сколько нужно обращаться заранее?",
    answer:
      "Чем раньше — тем лучше. Для свадеб рекомендуем обращаться за 3–6 месяцев, для корпоративных мероприятий — за 1–2 месяца. Срочные заявки тоже рассматриваем.",
  },
  {
    question: "Вы занимаетесь только декором или ещё и организацией?",
    answer:
      "Наша специализация — декор и оформление пространства. При необходимости можем порекомендовать проверенных партнёров по организации мероприятий.",
  },
  {
    question: "Можно ли увидеть примеры работ перед заказом?",
    answer:
      "Конечно! Вы можете посмотреть наше портфолио на сайте, а также запросить дополнительные фото и видео в мессенджере.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Напишите нам в Telegram или ВКонтакте, либо заполните форму на сайте. Мы свяжемся с вами, обсудим детали и предложим варианты оформления.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}