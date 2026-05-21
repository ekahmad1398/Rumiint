import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight, FiCompass, FiHome, FiImage } from 'react-icons/fi'

import OptimizedImage from '../components/OptimizedImage'
import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

const quickLinkIcons = [FiHome, FiImage, FiCompass]
const quickLinkTargets = ['/', '/photos', '/events']

export default function NotFoundPage() {
  const location = useLocation()
  const { t } = useLanguage()
  const quickLinks = t('notFound.quickLinks')

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal distance={24}>
          <div className="surface-card-strong not-found-shell p-8 md:p-10">
            <span className="not-found-code">{t('notFound.code')}</span>

            <SectionHeading
              description={t('notFound.description')}
              eyebrow={t('notFound.eyebrow')}
              title={t('notFound.title')}
            />

            <p className="mt-6 max-w-2xl text-base leading-8" style={{ color: 'var(--text-soft)' }}>
              {t('notFound.body')}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="portal-button gap-2" to="/">
                {t('notFound.primaryButton')}
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link className="secondary-button" to="/photos">
                {t('notFound.secondaryButton')}
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em]" style={{ color: 'var(--text-soft)' }}>
                {t('notFound.requestedPath')}
              </p>
              <code className="not-found-path mt-3 inline-flex max-w-full items-center rounded-full px-4 py-2 text-sm">
                {location.pathname || '/'}
              </code>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-6" delayChildren={0.06} staggerChildren={0.08}>
          <Reveal>
            <div className="surface-card-strong not-found-visual overflow-hidden p-4 md:p-5">
              <div className="not-found-image-shell overflow-hidden rounded-[28px]">
                <OptimizedImage
                  alt={t('notFound.imageAlt')}
                  className="h-full min-h-[340px] w-full object-cover"
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  src="/gallery/graduation-group-01.jpg"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>

              <div className="mt-5 rounded-[26px] border px-5 py-5" style={{ borderColor: 'var(--border)' }}>
                <p className="eyebrow">{t('notFound.visualEyebrow')}</p>
                <h2 className="mt-3 text-2xl font-black">{t('notFound.visualTitle')}</h2>
                <p className="mt-3 text-sm leading-7 md:text-base" style={{ color: 'var(--text-soft)' }}>
                  {t('notFound.visualDescription')}
                </p>
              </div>
            </div>
          </Reveal>
        </Stagger>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <Reveal>
          <SectionHeading
            description={t('notFound.quickLinksDescription')}
            eyebrow={t('notFound.quickLinksEyebrow')}
            title={t('notFound.quickLinksTitle')}
          />
        </Reveal>

        <Stagger className="mt-8 grid gap-5 md:grid-cols-3" delayChildren={0.05} staggerChildren={0.08}>
          {quickLinks.map((item, index) => {
            const Icon = quickLinkIcons[index] ?? FiCompass
            const to = quickLinkTargets[index] ?? '/'

            return (
              <Reveal key={item.title} distance={18}>
                <article className="surface-card not-found-link-card p-6">
                  <span className="not-found-link-icon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {item.description}
                  </p>
                  <Link className="secondary-button mt-6 inline-flex gap-2" to={to}>
                    {item.cta}
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </Stagger>
      </section>
    </div>
  )
}
