import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight, FiCompass, FiHome, FiImage, FiMapPin, FiSearch } from 'react-icons/fi'

import OptimizedImage from '../components/OptimizedImage'
import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'
import { routes } from '../siteConfig'

const quickLinkIcons = [FiHome, FiImage, FiCompass]
const quickLinkTargets = [routes.home, routes.gallery, routes.events]
const routeMarkers = [routes.home, routes.gallery, routes.events]

export default function NotFoundPage() {
  const location = useLocation()
  const { t } = useLanguage()
  const quickLinks = t('notFound.quickLinks')

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[1.04fr_0.96fr]">
        <Reveal distance={24}>
          <div className="surface-card-strong not-found-shell p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="not-found-code">{t('notFound.code')}</span>
              <span className="not-found-route-pill">
                <FiMapPin className="h-4 w-4" />
                {location.pathname || routes.home}
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
              <div>
                <SectionHeading
                  description={t('notFound.description')}
                  eyebrow={t('notFound.eyebrow')}
                  title={t('notFound.title')}
                />

                <p className="mt-6 max-w-2xl text-base leading-8" style={{ color: 'var(--text-soft)' }}>
                  {t('notFound.body')}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link className="portal-button gap-2" to={routes.home}>
                    {t('notFound.primaryButton')}
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                  <Link className="secondary-button" to={routes.gallery}>
                    {t('notFound.secondaryButton')}
                  </Link>
                </div>

                <div className="mt-8 rounded-[28px] border px-5 py-5" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3">
                    <span className="not-found-search-badge">
                      <FiSearch className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.28em]" style={{ color: 'var(--text-soft)' }}>
                        {t('notFound.requestedPath')}
                      </p>
                      <code className="not-found-path mt-2 inline-flex max-w-full items-center rounded-full px-4 py-2 text-sm">
                        {location.pathname || routes.home}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="not-found-compass hidden lg:flex">
                <div className="not-found-compass-core">
                  <span>404</span>
                </div>
                {routeMarkers.map((marker) => (
                  <span key={marker} className="not-found-marker">
                    {marker}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-6" delayChildren={0.06} staggerChildren={0.08}>
          <Reveal>
            <div className="surface-card-strong not-found-visual overflow-hidden p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
                <div className="not-found-image-shell overflow-hidden rounded-[30px]">
                  <OptimizedImage
                    alt={t('notFound.imageAlt')}
                    className="h-full min-h-[340px] w-full object-cover"
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    src="/gallery/graduation-group-01.jpg"
                    style={{ objectPosition: '50% 30%' }}
                  />
                  <div className="not-found-photo-badge">{t('notFound.visualEyebrow')}</div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="not-found-message-card rounded-[28px] border px-5 py-5" style={{ borderColor: 'var(--border)' }}>
                    <p className="eyebrow">{t('notFound.visualEyebrow')}</p>
                    <h2 className="mt-3 text-2xl font-black">{t('notFound.visualTitle')}</h2>
                    <p className="mt-3 text-sm leading-7 md:text-base" style={{ color: 'var(--text-soft)' }}>
                      {t('notFound.visualDescription')}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                    {quickLinks.map((item, index) => {
                      const Icon = quickLinkIcons[index] ?? FiCompass
                      const to = quickLinkTargets[index] ?? routes.home

                      return (
                        <article key={item.title} className="not-found-link-card surface-card p-5">
                          <span className="not-found-link-icon">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                            {item.description}
                          </p>
                          <Link className="secondary-button mt-5 inline-flex gap-2" to={to}>
                            {item.cta}
                            <FiArrowRight className="h-4 w-4" />
                          </Link>
                        </article>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Stagger>
      </section>
    </div>
  )
}
