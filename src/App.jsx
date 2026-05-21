import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import FAQPage from './pages/FAQPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { routes } from './siteConfig'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.about} element={<AboutPage />} />
          <Route path={routes.gallery} element={<GalleryPage />} />
          <Route path={routes.legacyGallery} element={<Navigate replace to={routes.gallery} />} />
          <Route path={routes.events} element={<EventsPage />} />
          <Route path={routes.legacyEvents} element={<Navigate replace to={routes.events} />} />
          <Route path={routes.legacyPrograms} element={<Navigate replace to={routes.gallery} />} />
          <Route path={routes.faq} element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
