import { useState } from "react"
import { Link } from "react-router-dom"

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Destinations", to: "/destination/domestic" },
  { label: "Tour Packages", to: "/tour-packages/family" },
  { label: "Tours", to: "/tours/tour-details" },
  { label: "Contact Us", to: "/contact" },
  { label: "Plan My Trip", to: "/book-my-trip" },
]

const tourPackages = [
  { label: "Family Tours", to: "/tour-packages/family", emoji: "👨‍👩‍👧‍👦" },
  { label: "Honeymoon Tours", to: "/tour-packages/honeymoon", emoji: "💍" },
  { label: "Bachelor Tours", to: "/tour-packages/bachelor", emoji: "🥂" },
]

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="#0f172a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d5ab56] to-transparent opacity-60" />

      {/* Subtle radial background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, #d5ab56 0%, transparent 55%), radial-gradient(circle at 85% 20%, #d5ab56 0%, transparent 45%)",
        }}
      />

      {/* Newsletter */}
      <div className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#d5ab56]">
                Exclusive Offers & Itinerary Inspiration
              </p>
              <h3 className="font-serif text-lg font-bold text-white">
                Subscribe to Our Travel Newsletter
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Curated deals, destination guides, and early-access packages — delivered weekly.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2">
              {subscribed ? (
                <div className="flex flex-1 items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-4 py-2.5 text-sm font-semibold text-emerald-400">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  You are subscribed — thank you!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-sm transition-all focus:border-[#d5ab56]/60 focus:outline-none focus:ring-1 focus:ring-[#d5ab56]/30"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 active:scale-95"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-3" aria-label="RK Tours Home">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 via-slate-700 to-[#d7b36a] text-sm font-bold text-white shadow-lg shadow-[#d7b36a]/20 transition-all group-hover:shadow-[#d7b36a]/40">
                RK
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d5ab56]">Luxury Travel</div>
                <div className="text-lg font-semibold tracking-[0.1em] text-white">RK TOURS</div>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Crafting bespoke journeys for discerning travellers since 2005. From Himalayan valleys to Mediterranean coastlines — every itinerary is a masterpiece.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["IATA Certified", "10,000+ Trips", "50+ Countries", "4.9 Rated"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:scale-110 hover:border-[#d5ab56]/60 hover:bg-[#d5ab56]/10 hover:text-[#d5ab56]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#d5ab56]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-150 hover:text-white"
                  >
                    <span className="h-px w-3 bg-slate-600 transition-all duration-200 group-hover:w-5 group-hover:bg-[#d5ab56]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations + Packages */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#d5ab56]">
              Tour Packages
            </h4>
            <ul className="space-y-2.5">
              {tourPackages.map((pkg) => (
                <li key={pkg.to}>
                  <Link
                    to={pkg.to}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-150 hover:text-white"
                  >
                    <span className="text-base leading-none">{pkg.emoji}</span>
                    {pkg.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#d5ab56]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-[#d5ab56]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6A16 16 0 0 0 13.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone & WhatsApp</p>
                  <a href="tel:+919153832633" className="text-sm text-slate-300 transition-colors hover:text-[#d5ab56]">
                    +91 9153832633
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-[#d5ab56]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</p>
                  <a href="mailto:rupasingh10456@gmail.com" className="text-sm text-slate-300 transition-colors hover:text-[#d5ab56]">
                    rupasingh10456@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-[#d5ab56]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Office Address</p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Undri , Aeronest Place,<br />
                    Pune, India 160004
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-[#d5ab56]">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Business Hours</p>
                  <p className="text-sm text-slate-300">Mon – Sat, 9:00 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-medium text-slate-400">RK Tours & Travels</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs">
              <a href="#" className="px-2 py-1 text-slate-500 transition-colors hover:text-[#d5ab56]">Privacy Policy</a>
              <span className="text-slate-700">·</span>
              <a href="#" className="px-2 py-1 text-slate-500 transition-colors hover:text-[#d5ab56]">Terms & Conditions</a>
              <span className="text-slate-700">·</span>
              <a href="#" className="px-2 py-1 text-slate-500 transition-colors hover:text-[#d5ab56]">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
