import OptimizedImage from '../components/OptimizedImage'
import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  const pillars = t('about.pillars')
  const paragraphs = t('about.paragraphs')

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal distance={24}>
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
        </Reveal>

        <Reveal delay={0.06} distance={24}>
          <div className="grid gap-6">
            <div className="surface-card-strong overflow-hidden">
              <OptimizedImage
                alt={t('about.imageAlt')}
                className="h-full min-h-[340px] w-full object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/gallery/assessment-hall-01.jpg"
                style={{ objectPosition: '50% 36%' }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <Stagger className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2" delayChildren={0.04}>
        <Reveal>
          <article className="surface-card p-7 md:p-8">
            <p className="eyebrow">{t('about.missionEyebrow')}</p>
            <h2 className="mt-4 text-3xl font-extrabold">{t('about.missionTitle')}</h2>
            <p className="mt-4 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
              {t('about.missionText')}
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="surface-card p-7 md:p-8">
            <p className="eyebrow">{t('about.visionEyebrow')}</p>
            <h2 className="mt-4 text-3xl font-extrabold">{t('about.visionTitle')}</h2>
            <p className="mt-4 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
              {t('about.visionText')}
            </p>
          </article>
        </Reveal>
      </Stagger>

      <section className="mx-auto mt-16 max-w-7xl">
        <Reveal distance={24}>
          <div className="surface-card-strong p-8 md:p-10">
            <SectionHeading
              description={t('about.pillarsDescription')}
              eyebrow={t('about.pillarsEyebrow')}
              title={t('about.pillarsTitle')}
            />
            <Stagger className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4" delayChildren={0.04} staggerChildren={0.07}>
              {pillars.map((pillar) => (
                <Reveal key={pillar.title} distance={18}>
                  <div className="surface-card p-6">
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
                      {pillar.kicker}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
