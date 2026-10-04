import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const dropdownMenus = {
  destination: [
    { label: 'Domestic', to: '/destination/domestic' },
    { label: 'International', to: '/destination/international' },
  ],
  tourPackages: [
    { label: 'Family Tours', to: '/tour-packages/family' },
    { label: 'Honeymoon Tours', to: '/tour-packages/honeymoon' },
    { label: 'Bachelor Tours', to: '/tour-packages/bachelor' },
  ],
  tours: [
    { label: 'Tour Details', to: '/tours/tour-details' },
    { label: 'Hotel Details', to: '/tours/hotel-details' },
    { label: 'Plan My Trip', to: '/book-my-trip' },
  ],
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destination', dropdown: 'destination' },
  { label: 'Tour Packages', dropdown: 'tourPackages' },
  { label: 'Tours', dropdown: 'tours' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Login', to: '/login' },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const headerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const toggleDropdown = (key) => {
    setOpenDropdown((current) => (current === key ? null : key))
  }

  const renderDropdownMenu = (menuKey) => {
    const menuItems = dropdownMenus[menuKey]

    return (
      <div
        className={`absolute left-0 top-[calc(100%+0.85rem)] w-72 overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white/95 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl transition-all duration-200 ease-out ${
          openDropdown === menuKey
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#d7b36a]/40 hover:bg-[#fffaf1] hover:text-slate-900"
              onClick={() => setOpenDropdown(null)}
            >
              <span>{item.label}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-500 transition group-hover:bg-[#f3e3bd] group-hover:text-[#67512a]">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full pt-4" ref={headerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-full border border-white/70 px-4 py-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Home">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-[#d7b36a] text-sm font-bold text-white shadow-lg shadow-[#d7b36a]/20">
                RK
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#9d7b3d]">Luxury travel</div>
                <div className="text-lg font-semibold tracking-[0.1em] text-slate-900">RK TOURS</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label} className="relative">
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/80 hover:text-slate-900"
                        onClick={() => toggleDropdown(item.dropdown)}
                      >
                        <span>{item.label}</span>
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.dropdown ? 'rotate-180' : ''}`}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {renderDropdownMenu(item.dropdown)}
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive ? 'text-slate-900 shadow-[inset_0_-2px_0_0_#d7b36a]' : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                to="/book-my-trip"
                className="rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-[#b28a43] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0f172a]/20 transition hover:scale-[1.02]"
              >
                Plan My Trip
              </Link>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 lg:hidden"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-slate-200/80 pt-4 lg:hidden">
              <nav className="flex flex-col gap-2 pb-2">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-white/70 p-2">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-2 py-2 text-left text-sm font-medium text-slate-700"
                          onClick={() => toggleDropdown(item.dropdown)}
                        >
                          <span>{item.label}</span>
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.dropdown ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        {openDropdown === item.dropdown ? (
                          <div className="mt-2 space-y-1 border-t border-slate-200/80 pt-2">
                            {dropdownMenus[item.dropdown].map((menuItem) => (
                              <Link
                                key={menuItem.to}
                                to={menuItem.to}
                                className="block rounded-xl px-2.5 py-2 text-sm text-slate-600 transition hover:bg-[#fffaf1] hover:text-slate-900"
                              >
                                {menuItem.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )
                  }

                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                          isActive ? 'bg-[#fffaf1] text-slate-900' : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                })}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header