import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGlobe, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

import OptimizedImage from './OptimizedImage'
import { useLanguage } from '../contexts/LanguageContext'
import { portalUrl, routes } from '../siteConfig'
import { useTheme } from '../contexts/ThemeContext'

const navItems = [
  { path: routes.home, key: 'home' },
  { path: routes.about, key: 'about' },
  { path: routes.gallery, key: 'gallery' },
  { path: routes.events, key: 'events' },
  { path: routes.faq, key: 'faq' },
]

const mobileMenuTransition = {
  duration: 0.36,
  ease: [0.22, 1, 0.36, 1],
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t, language, toggleLanguage, isRTL } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    let frameId = 0

    const syncScrollState = () => {
      frameId = 0
      const nextValue = window.scrollY > 16
      setIsScrolled((currentValue) => (currentValue === nextValue ? currentValue : nextValue))
    }

    const handleScroll = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(syncScrollState)
    }

    syncScrollState()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinkClassName = ({ isActive }) => `page-link ${isActive ? 'page-link-active' : ''}`

  return (
    <header className="sticky top-0 z-[60] px-4 pt-3">
      <div className={`navbar-shell mx-auto max-w-7xl ${isScrolled ? 'navbar-shell-scrolled' : ''}`}>
        <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-7">
          <NavLink className="flex min-w-0 items-center gap-3" to="/">
            <span className="navbar-logo-shell">
              <OptimizedImage
                alt="Rumi International School logo"
                className="h-12 w-12 shrink-0 object-contain"
                priority
                src="/rumi-logo-clean.png"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-black uppercase tracking-[0.28em] text-brand-sky">
                Rumi
              </p>
              <p className="truncate text-sm font-semibold md:text-base">{t('brand.full')}</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                className={navLinkClassName}
                end={item.path === '/'}
                to={item.path}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              aria-label={t('nav.toggleLanguage')}
              className="language-toggle"
              onClick={toggleLanguage}
              type="button"
            >
              <span className="language-toggle-icon">
                <FiGlobe className="h-4 w-4" />
              </span>
              <span dir="ltr">
                <span className={`language-chip ${language === 'en' ? 'language-chip-active' : ''}`}>
                  EN
                </span>
                <span className="px-1 text-slate-400">/</span>
                <span className={`language-chip ${language === 'fa' ? 'language-chip-active' : ''}`}>
                  FA
                </span>
              </span>
            </button>

            <button
              aria-label={t('nav.toggleTheme')}
              className="icon-button text-lg"
              onClick={toggleTheme}
              type="button"
            >
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>

            <a
              className="portal-button"
              href={portalUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('nav.portal')}
            </a>
          </div>

          <button
            aria-label={isMenuOpen ? t('common.close') : t('nav.openMenu')}
            className="icon-button lg:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.div
              animate={{ height: 'auto', opacity: 1 }}
              className="overflow-hidden border-t lg:hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              style={{ borderColor: 'var(--border)' }}
              transition={mobileMenuTransition}
            >
              <motion.div
                animate="visible"
                className="px-5 pb-5 pt-4"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delayChildren: 0.04, staggerChildren: 0.05 },
                  },
                }}
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.key}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      <NavLink
                        className={navLinkClassName}
                        end={item.path === '/'}
                        to={item.path}
                      >
                        {t(`nav.${item.key}`)}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className={`mt-4 flex gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <button
                    aria-label={t('nav.toggleLanguage')}
                    className="language-toggle"
                    onClick={toggleLanguage}
                    type="button"
                  >
                    <span className="language-toggle-icon">
                      <FiGlobe className="h-4 w-4" />
                    </span>
                    <span dir="ltr">
                      <span className={`language-chip ${language === 'en' ? 'language-chip-active' : ''}`}>
                        EN
                      </span>
                      <span className="px-1 text-slate-400">/</span>
                      <span className={`language-chip ${language === 'fa' ? 'language-chip-active' : ''}`}>
                        FA
                      </span>
                    </span>
                  </button>

                  <button
                    aria-label={t('nav.toggleTheme')}
                    className="icon-button text-lg"
                    onClick={toggleTheme}
                    type="button"
                  >
                    {theme === 'light' ? <FiMoon /> : <FiSun />}
                  </button>
                </motion.div>

                <motion.a
                  className="portal-button mt-4 w-full"
                  href={portalUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {t('nav.portal')}
                </motion.a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
