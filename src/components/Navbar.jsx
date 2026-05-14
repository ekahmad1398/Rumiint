import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiGlobe, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const navItems = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/gallery', key: 'gallery' },
  { path: '/events', key: 'events' },
  { path: '/faq', key: 'faq' },
]

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

  const navLinkClassName = ({ isActive }) =>
    `page-link ${isActive ? 'page-link-active' : ''}`

  return (
    <header className="sticky top-0 z-[60] px-4 pt-3">
      <div
        className={`navbar-shell mx-auto max-w-7xl ${isScrolled ? 'navbar-shell-scrolled' : ''}`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-7">
          <NavLink className="flex min-w-0 items-center gap-3" to="/">
            <span className="navbar-logo-shell">
              <img
                alt="Rumi International School logo"
                className="h-12 w-12 shrink-0 object-contain"
                src="/rumi-logo-clean.png"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-black uppercase tracking-[0.28em] text-brand-sky">
                Rumi
              </p>
              <p className="truncate text-sm font-semibold md:text-base">
                {t('brand.full')}
              </p>
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
              href="https://portal.rumiint.com"
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

        <div
          className={`navbar-menu overflow-hidden border-t lg:hidden ${
            isMenuOpen ? 'navbar-menu-open' : 'navbar-menu-closed'
          }`}
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="px-5 pb-5 pt-4">
            <nav className="flex flex-col gap-2">
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

            <div className={`mt-4 flex gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
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
            </div>

            <a
              className="portal-button mt-4 w-full"
              href="https://portal.rumiint.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('nav.portal')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
