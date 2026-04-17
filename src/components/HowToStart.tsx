import { HighlightedText } from "./HighlightedText"

const steps = [
  {
    title: "Связываетесь с нами",
    description:
      "Пишите по любому удобному каналу — Telegram, ВКонтакте или эл. почте. Мы познакомимся, обсудим ваши желания по оформлению пространства или брендингу локации, сразу составим смету, основываясь на ваших запросах.",
  },
  {
    title: "Встречаемся на месте",
    description:
      "Встретимся лично на месте проведения мероприятия. Обсудим всё в деталях и утвердим местоположение декораций.",
  },
  {
    title: "Готовим декор заранее",
    description:
      "Заранее сделаем декор и отправим результат, чтобы в день праздника у вас было на одну заботу меньше.",
  },
  {
    title: "Приводим всё в порядок",
    description:
      "После мероприятия приедем и вернём локацию в прежний вид — вам не нужно ни о чём беспокоиться.",
  },
]

export function HowToStart() {
  return (
    <section id="how-to-start" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Сотрудничество</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Как начать с нами <HighlightedText>работать?</HighlightedText>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <span className="text-4xl font-medium text-muted-foreground/20 leading-none shrink-0">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
