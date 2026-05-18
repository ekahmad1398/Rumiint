import OptimizedImage from '../components/OptimizedImage'
import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

export default function EventsPage() {
  const { t } = useLanguage()
  const featured = t('events.featured')
  const highlights = t('events.highlights')

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            description={t('events.description')}
            eyebrow={t('events.eyebrow')}
            title={t('events.title')}
            titleClassName="event-page-heading"
          />
        </Reveal>

        <Reveal delay={0.05} distance={24}>
          <article className="event-feature-shell mt-10 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="event-feature-copy p-8 md:p-10">
                <span className="gallery-category-pill">{featured.category}</span>
                <h3 className="mt-5 text-3xl font-black tracking-tight md:text-[2.55rem]">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 md:text-lg" style={{ color: 'var(--text-soft)' }}>
                  {featured.description}
                </p>
              </div>
              <div className="event-feature-media p-4 md:p-5">
                <OptimizedImage
                  alt={featured.imageAlt}
                  className="h-full min-h-[340px] w-full rounded-[28px] object-cover"
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  src={featured.image}
                  style={{ objectPosition: featured.position }}
                />
              </div>
            </div>
          </article>
        </Reveal>

        <Stagger className="mt-8 grid gap-6 md:grid-cols-2" delayChildren={0.05} staggerChildren={0.07}>
          {highlights.map((event) => (
            <Reveal key={event.title} distance={20}>
              <article className="surface-card event-card overflow-hidden">
                <div className="p-3">
                  <div className="event-card-media overflow-hidden rounded-[24px]">
                    <OptimizedImage
                      alt={event.imageAlt}
                      className="h-64 w-full object-cover"
                      sizes="(min-width: 768px) 45vw, 100vw"
                      src={event.image}
                      style={{ objectPosition: event.position }}
                    />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <span className="gallery-category-pill">{event.category}</span>
                  <h3 className="mt-4 text-2xl font-black">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 md:text-base" style={{ color: 'var(--text-soft)' }}>
                    {event.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
