import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

function formatEventDate(dateString, language) {
  return new Intl.DateTimeFormat(language === 'fa' ? 'fa-AF' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default function EventsPage() {
  const { t, language } = useLanguage()
  const events = t('events.items')

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          description={t('events.description')}
          eyebrow={t('events.eyebrow')}
          title={t('events.title')}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card-strong overflow-hidden">
            <img
              alt={t('events.imageAlt')}
              className="h-full min-h-[320px] w-full object-cover"
              src="/gallery/ceremony-01.jpg"
            />
          </div>

          <div className="relative space-y-5 before:absolute before:start-[1.35rem] before:top-6 before:h-[calc(100%-3rem)] before:w-px before:bg-cyan-200 dark:before:bg-cyan-500/20">
            {events.map((event) => (
              <article key={event.date + event.title} className="surface-card relative ps-16 p-6">
                <span className="absolute start-4 top-7 h-3 w-3 rounded-full bg-brand-sky" />
                <p className="eyebrow">{formatEventDate(event.date, language)}</p>
                <h3 className="mt-3 text-2xl font-extrabold">{event.title}</h3>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                  {event.description}
                </p>
                <p className="mt-4 text-sm font-bold text-brand-sky">{event.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
