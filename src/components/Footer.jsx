import {
  FaEnvelope,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa'

import OptimizedImage from './OptimizedImage'
import { Reveal, Stagger } from './Reveal'
import { useLanguage } from '../contexts/LanguageContext'

const socialLinks = [
  {
    href: 'https://youtube.com/@rumiinternationalhighschoo8277?si=ujqdxgM8CTyzKibn',
    icon: FaYoutube,
    label: 'YouTube',
  },
  {
    href: 'https://www.facebook.com/RumiInternationalHighSchool',
    icon: FaFacebookF,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/rumi.school2007?igsh=OWQxZ3E5OXFwMjd4',
    icon: FaInstagram,
    label: 'Instagram',
  },
]

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const copyrightYears = currentYear > 2021 ? `2021-${currentYear}` : '2021'
  const portfolioUrl = 'https://portfolio-phi-olive-94.vercel.app/'

  return (
    <footer className="px-4 pb-6 pt-20">
      <Reveal className="mx-auto max-w-7xl" distance={24}>
        <div className="surface-card-strong footer-shell overflow-hidden">
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <Stagger className="space-y-6" staggerChildren={0.07}>
              <Reveal delay={0.02}>
                <div className="flex items-center gap-3">
                  <div className="footer-logo-wrap">
                    <OptimizedImage
                      alt="Rumi International School logo"
                      className="h-14 w-14 object-contain"
                      src="/rumi-logo-clean.png"
                    />
                  </div>
                  <div>
                    <p className="eyebrow">{t('footer.contactTitle')}</p>
                    <h2 className="text-2xl font-black">{t('brand.full')}</h2>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="max-w-2xl text-base leading-8" style={{ color: 'var(--text-soft)' }}>
                  {t('footer.tagline')}
                </p>
              </Reveal>

              <div className="grid gap-4 md:grid-cols-2">
                <Reveal delay={0.12}>
                  <a className="surface-card footer-info-card flex items-center gap-4 p-4" href="tel:+93788979899">
                    <span className="icon-button h-12 w-12 shrink-0">
                      <FaPhoneAlt />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{t('footer.phoneLabel')}</p>
                      <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
                        +93 78 897 9899
                      </p>
                    </div>
                  </a>
                </Reveal>

                <Reveal delay={0.16}>
                  <a
                    className="surface-card footer-info-card flex items-center gap-4 p-4"
                    href="mailto:info@rumiint.com"
                  >
                    <span className="icon-button h-12 w-12 shrink-0">
                      <FaEnvelope />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{t('footer.emailLabel')}</p>
                      <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
                        info@rumiint.com
                      </p>
                    </div>
                  </a>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="surface-card space-y-4 p-5">
                  <div className="flex items-start gap-4">
                    <span className="icon-button h-12 w-12 shrink-0">
                      <FaMapMarkerAlt />
                    </span>
                    <div className="space-y-2">
                      <p className="text-sm font-bold">{t('footer.addressLabel')}</p>
                      <p className="text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                        {t('footer.address')}
                      </p>
                      <a
                        className="inline-flex text-sm font-bold text-brand-sky"
                        href="https://www.google.com/maps?q=34.5600828,69.1534761&z=17&hl=en"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {t('footer.viewMap')}
                      </a>
                    </div>
                  </div>

                  <div className="soft-divider" />

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold">{t('footer.websiteLabel')}</span>
                    <a
                      className="text-sm font-semibold text-brand-sky"
                      href="https://rumiint.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      rumiint.com
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {socialLinks.map((item) => {
                      const Icon = item.icon

                      return (
                        <a
                          key={item.label}
                          aria-label={item.label}
                          className="icon-button"
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Icon />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            </Stagger>

            <Reveal delay={0.1}>
              <div className="surface-card overflow-hidden p-2">
                <iframe
                  className="h-full min-h-[320px] w-full rounded-[24px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=34.5600828,69.1534761&z=17&hl=en&output=embed"
                  title="Rumi International School location"
                />
              </div>
            </Reveal>
          </div>

          <div
            className="footer-legal flex flex-col gap-3 border-t px-6 py-4 text-sm lg:flex-row lg:items-center lg:justify-between"
            style={{ borderColor: 'var(--border)', color: 'var(--text-soft)' }}
          >
            <p className="flex flex-wrap items-center gap-2">
              <span dir="ltr">{`© ${copyrightYears}`}</span>
              <span>{t('footer.rightsReserved')}</span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span>{t('footer.developedBy')}</span>
              <a
                aria-label="Portfolio"
                className="footer-credit-link"
                href={portfolioUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaHeart className="footer-heart-icon" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
