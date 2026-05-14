import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  const pillars = t('about.pillars')
  const paragraphs = t('about.paragraphs')

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="surface-card-strong p-8 md:p-10">
          <SectionHeading
            description={t('about.intro')}
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
          />
          <div className="mt-8 space-y-5 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="surface-card-strong overflow-hidden">
            <img
              alt={t('about.imageAlt')}
              className="h-full min-h-[340px] w-full object-cover"
              src="/gallery/presentation-lesson-02.jpg"
              style={{ objectPosition: '50% 42%' }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="surface-card p-7 md:p-8">
          <p className="eyebrow">{t('about.missionEyebrow')}</p>
          <h2 className="mt-4 text-3xl font-extrabold">{t('about.missionTitle')}</h2>
          <p className="mt-4 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
            {t('about.missionText')}
          </p>
        </article>

        <article className="surface-card p-7 md:p-8">
          <p className="eyebrow">{t('about.visionEyebrow')}</p>
          <h2 className="mt-4 text-3xl font-extrabold">{t('about.visionTitle')}</h2>
          <p className="mt-4 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
            {t('about.visionText')}
          </p>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="surface-card-strong p-8 md:p-10">
          <SectionHeading
            description={t('about.pillarsDescription')}
            eyebrow={t('about.pillarsEyebrow')}
            title={t('about.pillarsTitle')}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="surface-card p-6">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
                  {pillar.kicker}
                </span>
                <h3 className="mt-4 text-xl font-extrabold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
