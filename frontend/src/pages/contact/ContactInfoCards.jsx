import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, Copy, Check, ArrowUpRight } from 'lucide-react'

export default function ContactInfoCards() {
  const [copiedKey, setCopiedKey] = useState(null)

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const contactItems = [
    {
      key: 'phone',
      icon: <Phone className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Direct Phone Concierge',
      primary: '+91 9153832633',
      secondary: '+91 98765 43210 (Toll Free)',
      actionText: 'Call Now',
      actionHref: 'tel:+919153832633',
      copyValue: '+919153832633',
      badge: '24/7 Priority',
    },
    {
      key: 'email',
      icon: <Mail className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Email Inquiries',
      primary: 'rupasingh10456@gmail.com',
      secondary: 'vip.support@rktours.com',
      actionText: 'Send Email',
      actionHref: 'mailto:rupasingh10456@gmail.com',
      copyValue: 'rupasingh10456@gmail.com',
      badge: '< 2h Response',
    },
    {
      key: 'whatsapp',
      icon: <MessageSquare className="h-5 w-5 text-[#d5ab56]" />,
      title: 'WhatsApp Quick Chat',
      primary: '+91 9153832633',
      secondary: 'Instant trip consultations & itinerary sharing',
      actionText: 'Start Chat',
      actionHref: 'https://wa.me/919153832633?text=Hello%20RK%20Tours%20Concierge,%20I%20would%20like%20to%20plan%20a%20luxury%20trip.',
      copyValue: '+919153832633',
      badge: 'Instant Reply',
    },
    {
      key: 'hours',
      icon: <Clock className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Concierge Working Hours',
      primary: 'Mon – Sat: 09:00 AM – 08:30 PM (IST)',
      secondary: 'Sunday & Public Holidays: 10:00 AM – 05:00 PM',
      actionText: 'Request Callback',
      actionHref: '#contact-form',
      badge: 'Always Available',
    },
    {
      key: 'address',
      icon: <MapPin className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Global Headquarters',
      primary: 'Undri, Aeronest Place, Pune 160004, India',
      secondary: 'Connaught Place, Pune 160001, India',
      actionText: 'View on Map',
      actionHref: '#office-map',
      copyValue: 'Pune, India 160001',
      badge: 'Private Lounge',
      colSpan: 'sm:col-span-2 lg:col-span-2',
    },
  ]

  return (
    <section id="contact-info" className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fffaf1] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d5ab56]" />
              <span>Section 02 / Direct Contact Channels</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Get in Touch with Our Specialists
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Reach our private client advisors via phone, WhatsApp, email, or schedule a private consultation.
            </p>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => (
            <div
              key={item.key}
              className={`group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 sm:p-5 transition-all duration-300 hover:border-[#d5ab56]/60 hover:bg-white hover:shadow-md ${
                item.colSpan || ''
              }`}
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fffaf1] border border-[#d7b36a]/30 shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="rounded-md bg-slate-200/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-[#9d7b3d] transition-colors">
                  {item.title}
                </h3>

                {/* Primary & Secondary text */}
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-800">
                  {item.primary}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                  {item.secondary}
                </p>
              </div>

              {/* Action Buttons Line */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                {item.actionHref.startsWith('#') ? (
                  <a
                    href={item.actionHref}
                    className="inline-flex items-center gap-1 font-bold text-[#9d7b3d] hover:text-[#7a5b2d]"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <a
                    href={item.actionHref}
                    target={item.actionHref.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#9d7b3d] hover:text-[#7a5b2d]"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}

                {item.copyValue && (
                  <button
                    type="button"
                    onClick={() => handleCopy(item.copyValue, item.key)}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-700"
                    title="Copy to clipboard"
                  >
                    {copiedKey === item.key ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
