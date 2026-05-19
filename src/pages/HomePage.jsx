import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiBookOpen,
  FiExternalLink,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'

import OptimizedImage from '../components/OptimizedImage'
import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

const ratioClasses = {
  portrait: 'aspect-auto sm:aspect-[4/5]',
  square: 'aspect-auto sm:aspect-square',
  landscape: 'aspect-auto sm:aspect-[4/3]',
  wide: 'aspect-auto sm:aspect-[16/10]',
}

const layoutClasses = {
  portrait: 'col-span-1',
  square: 'col-span-1',
  landscape: 'sm:col-span-2 lg:col-span-1',
  wide: 'col-span-full',
}

const homeRotatingSources = [
  '/gallery/classroom-boys-focus-01.jpg',
  '/gallery/assessment-hall-01.jpg',
  '/gallery/early-learning-reading-01.jpg',
  '/gallery/graduation-group-01.jpg',
  '/gallery/graduation-speech-01.jpg',
  '/gallery/childrens-day-group-01.jpg',
  '/gallery/student-recognition-01.jpg',
  '/gallery/junior-writing-01.jpg',
]

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5)
}

function createPreviewDeck() {
  return shuffle(homeRotatingSources)
    .slice(0, 4)
    .map((src) => ({ src }))
}

function getRatioClass(ratio = 'portrait') {
  return ratioClasses[ratio] ?? ratioClasses.portrait
}

function getLayoutClass(ratio = 'portrait') {
  return layoutClasses[ratio] ?? layoutClasses.portrait
}

export default function HomePage() {
  const { language, t } = useLanguage()
  const stats = t('home.stats')
  const highlights = t('home.highlights')
  const galleryItems = t('gallery.items')
  const storyPillars = t('home.storyPillars')
  const storyIcons = [FiBookOpen, FiUsers, FiTrendingUp]
  const [previewDeck] = useState(createPreviewDeck)
  const admissionsYear = new Date().getFullYear()
  const formattedAdmissionsYear = new Intl.NumberFormat(language === 'fa' ? 'fa-IR' : 'en-US', {
    useGrouping: false,
  }).format(admissionsYear)
  const admissionsBadge =
    language === 'fa' ? `ثبت‌نام ${formattedAdmissionsYear} باز است` : `Admissions Open for ${formattedAdmissionsYear}`

  const previewItems = previewDeck
    .map((entry) => {
      const match = galleryItems.find((item) => item.src === entry.src)
      return match ? { ...match } : null
    })
    .filter(Boolean)

  return (
    <div className="page-enter px-4 pb-8 pt-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal distance={24}>
          <div className="surface-card-strong hero-panel overflow-hidden p-8 md:p-10">
            <p className="eyebrow">{admissionsBadge}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              {t('home.title')}
            </h1>
            <p className="section-copy mt-6 max-w-2xl">{t('home.description')}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="portal-button gap-2"
                href="https://portal.rumiint.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('home.primaryButton')}
                <FiExternalLink className="h-4 w-4" />
              </a>
              <Link className="secondary-button gap-2" to="/gallery">
                {t('home.secondaryButton')}
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-3" staggerChildren={0.08}>
              {stats.map((item) => (
                <Reveal key={item.label} distance={20}>
                  <div className="surface-card hero-stat-card p-5">
                    <p className="text-3xl font-black text-brand-sky">{item.value}</p>
                    <p className="mt-2 text-sm font-semibold" style={{ color: 'var(--text-soft)' }}>
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <Stagger className="grid gap-4" delayChildren={0.08} staggerChildren={0.08}>
          <Reveal>
            <div className="surface-card-strong hero-media-panel overflow-hidden">
              <OptimizedImage
                alt={t('home.heroImageAlt')}
                className="hero-media-image-cover h-full min-h-[360px] w-full object-cover"
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                src="/highlights/sat-success.jpg"
                style={{ objectPosition: 'center 24%' }}
              />
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <figure className="surface-card classroom-feature-card overflow-hidden p-3">
                <div className="gallery-frame classroom-feature-frame">
                  <OptimizedImage
                    alt={t('home.classroomImageAlt')}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 28vw, 100vw"
                    src="/gallery/early-learning-reading-01.jpg"
                    style={{ objectPosition: '50% 32%' }}
                  />
                </div>
                <figcaption className="px-3 pb-3 pt-4">
                  <span className="gallery-category-pill">{t('home.highlightsEyebrow')}</span>
                  <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {t('home.classroomImageDescription')}
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="surface-card achievement-panel p-5 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cyan-200">
                  {t('home.achievementEyebrow')}
                </p>
                <h2 className="mt-3 text-2xl font-black">{t('home.achievementTitle')}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200">{t('home.achievementBody')}</p>
              </div>
            </Reveal>
          </div>
        </Stagger>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <Reveal>
          <SectionHeading
            description={t('home.highlightsDescription')}
            eyebrow={t('home.highlightsEyebrow')}
            title={t('home.highlightsTitle')}
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-3" delayChildren={0.06} staggerChildren={0.08}>
          {highlights.map((item) => (
            <Reveal key={item.title} distance={20}>
              <article className="surface-card p-6">
                <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200">
                  {item.kicker}
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal distance={24}>
          <div className="surface-card-strong home-story-panel p-7 md:p-8">
            <SectionHeading
              description={t('home.storyDescription')}
              eyebrow={t('home.storyEyebrow')}
              title={t('home.storyTitle')}
            />
            <p className="mt-6 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
              {t('home.storyBody')}
            </p>
            <blockquote className="mt-6 rounded-[24px] bg-cyan-50 p-5 text-base font-semibold leading-8 text-brand-navy dark:bg-cyan-500/10 dark:text-cyan-100">
              {t('home.storyQuote')}
            </blockquote>

            <div className="home-story-highlight mt-8">
              {storyPillars.map((item, index) => {
                const Icon = storyIcons[index] ?? FiBookOpen

                return (
                  <div key={item.title} className="home-story-point">
                    <span className="home-story-badge">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link className="secondary-button mt-8 inline-flex" to="/about">
              {t('common.learnMore')}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.06} distance={24}>
          <div className="surface-card p-7 md:p-8">
            <SectionHeading
              description={t('home.galleryDescription')}
              eyebrow={t('gallery.eyebrow')}
              title={t('home.galleryTitle')}
            />
            <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--text-soft)' }}>
              {t('home.galleryInteractionHint')}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {previewItems.map((item) => (
                <figure
                  key={item.src}
                  className={`home-preview-card overflow-hidden rounded-[24px] border ${getLayoutClass(item.ratio)}`}
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className={`overflow-hidden ${getRatioClass(item.ratio)}`}>
                    <OptimizedImage
                      alt={item.alt}
                      className="h-auto w-full object-cover transition duration-500 hover:scale-[1.04] sm:h-full"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                      src={item.src}
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                  <figcaption className="p-4">
                    <span className="gallery-category-pill">{item.category}</span>
                    <p className="mt-3 text-base font-extrabold">{item.caption}</p>
                    <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <Reveal distance={24}>
          <div className="surface-card-strong overflow-hidden lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="cta-media-panel p-4 md:p-5">
              <OptimizedImage
                alt={t('home.ctaImageAlt')}
                className="cta-media-image h-full min-h-[300px] w-full rounded-[28px] object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
                src="/gallery/assessment-lab-01.jpg"
                style={{ objectPosition: '50% 42%' }}
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow">{t('home.ctaEyebrow')}</p>
              <h2 className="mt-4 section-title">{t('home.ctaTitle')}</h2>
              <p className="section-copy mt-4">{t('home.ctaBody')}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="portal-button"
                  href="https://portal.rumiint.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t('nav.portal')}
                </a>
                <Link className="secondary-button" to="/events">
                  {t('nav.events')}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
