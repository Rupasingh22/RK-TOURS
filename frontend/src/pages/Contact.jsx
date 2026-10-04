import { useEffect } from 'react'
import ContactHero from './contact/ContactHero'
import ContactInfoCards from './contact/ContactInfoCards'
import ContactInquiryForm from './contact/ContactInquiryForm'
import WhyContactUs from './contact/WhyContactUs'
import OfficeLocationMap from './contact/OfficeLocationMap'
import ContactFinalCTA from './contact/ContactFinalCTA'

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 selection:bg-[#d5ab56] selection:text-slate-950 font-sans">
      {/* SECTION 1: Contact Hero */}
      <ContactHero />

      {/* SECTION 2: Contact Information */}
      <ContactInfoCards />

      {/* SECTION 3: Contact Form */}
      <ContactInquiryForm />

      {/* SECTION 4: Why Contact Us */}
      <WhyContactUs />

      {/* SECTION 5: Office Location & Map */}
      <OfficeLocationMap />

      {/* SECTION 6: Final CTA */}
      <ContactFinalCTA />
    </div>
  )
}