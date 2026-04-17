import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Каждая деталь имеет значение",
    description:
      "Мы верим, что настоящий декор — это не просто красиво расставленные предметы. Это продуманная история, в которой каждый элемент говорит на одном языке.",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Нет двух одинаковых мероприятий. Мы глубоко погружаемся в запрос клиента, чтобы создать декор, который отражает именно вашу идею и характер.",
  },
  {
    title: "Эстетика и функциональность",
    description:
      "Красивое пространство должно быть удобным. Мы создаём декор, который восхищает взгляд и при этом учитывает логику мероприятия.",
  },
  {
    title: "Работаем на результат",
    description: "Наша цель — чтобы гости вашего мероприятия почувствовали магию с первого взгляда и запомнили этот день надолго.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О нас</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Декор с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/532e329d-334e-43dc-8293-783ede525737/bucket/6bc532fb-b8ec-4443-8420-08f6b0d7afe4.png"
                alt="Свадебный декор — стол с цветами"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Гильдия декораторов — команда профессионалов с пятилетним опытом оформления мероприятий. Мы создаём пространства, которые вызывают эмоции и остаются в памяти.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}