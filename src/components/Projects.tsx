import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Съёмки выпуска для футбольной команды PARI НН. Нижний Новгород. 2026.",
    category: "Корпоративное мероприятие",
    location: "Нижний Новгород",
    year: "2026",
    image: "/images/hously-1.png",
    link: "https://www.youtube.com/watch?v=p3noZvpbS14&t=74s",
  },
  {
    id: 2,
    title: "Съёмки рекламы Теле 2",
    category: "Съёмка",
    location: "Москва",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/532e329d-334e-43dc-8293-783ede525737/bucket/e9f0b4c3-17fc-4aea-870c-8f280dfd2718.png",
    link: null,
  },
  {
    id: 3,
    title: "Образовательный форум \"Поволжские берега\". Нижний Новгород. 2025",
    category: "Образовательный форум",
    location: "Нижний Новгород",
    year: "2025",
    image: "/images/hously-3.png",
    link: "https://vk.com/p_berega",
  },
  {
    id: 4,
    title: "Застройка сцены ун. им. Н. И. Лобачевского. Нижний Новгород. 2026",
    category: "Оформление",
    location: "Нижний Новгород",
    year: "2026",
    image: "/images/hously-4.png",
    link: null,
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Портфолио</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Обсудить ваш проект
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === project.id ? "scale-105" : "scale-100"
                      }`}
                    />
                  </a>
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                )}
                <div
                  className="absolute inset-0 bg-primary origin-top pointer-events-none"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
