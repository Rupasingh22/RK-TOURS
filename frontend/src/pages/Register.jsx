import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Check,
  Star,
} from 'lucide-react'

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Calculate basic password strength
  const getPasswordStrength = (pass) => {
    if (!pass) return 0
    let score = 0
    if (pass.length >= 6) score += 1
    if (pass.length >= 10) score += 1
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score += 1
    return score // 0 to 4
  }

  const strengthScore = getPasswordStrength(formData.password)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.')
      return
    }

    if (!formData.email.trim()) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.')
      return
    }

    if (formData.password.length < 6) {
      setErrorMsg('Password must be at least 6 characters in length.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.')
      return
    }

    if (!formData.agreeTerms) {
      setErrorMsg('Please accept the Terms of Service & Privacy Policy.')
      return
    }

    setIsSubmitting(true)

    // Simulate luxury account creation
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/tours/tour-details')
      }, 1500)
    }, 900)
  }

  const handleSocialRegister = (provider) => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }, 700)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f8f5f0] text-slate-900 selection:bg-[#d5ab56] selection:text-slate-950 font-sans py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 grid lg:grid-cols-12 min-h-[620px]">
        {/* LEFT COLUMN: Cinematic Travel Visual & Member Perks (5 cols) */}
        <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-8 text-white overflow-hidden bg-slate-950">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85"
              alt="Lake Como Palace"
              className="h-full w-full object-cover object-center brightness-[0.42] filter transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/40 bg-black/40 px-3 py-1 text-xs font-semibold tracking-wide text-[#f6e5b4] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Complimentary Membership</span>
            </div>
          </div>

          {/* Center Content: Perks List */}
          <div className="relative z-10 my-auto py-4">
            <div className="flex text-[#d5ab56] gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#d5ab56]" />
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              Unlock a World of Bespoke Privileges & Tailored Travel.
            </h3>
            <div className="mt-4 space-y-2.5">
              {[
                'Member-only preferred rates at 5-star partner resorts',
                'Dedicated 24/7 personal travel designer & WhatsApp concierge',
                'Complimentary airport VIP fast-track on selected tours',
                'Instant access to private villas, speedboats & helicopter tours',
              ].map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="h-3.5 w-3.5 text-[#d5ab56] shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Security Trust Badge */}
          <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Verified VIP Member Network</span>
            </div>
            <span className="text-[#d5ab56]">RK Tours Club</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Modern Luxury Registration Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fffaf1] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 mb-2">
              <Compass className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>New Traveler Membership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Create Your <span className="gold-gradient-text">Travel Profile</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Join thousands of discerning travelers with access to private journeys and luxury escapes.
            </p>
          </div>

          {/* Success Notification */}
          {isSuccess && (
            <div className="mb-5 flex items-center gap-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 p-3.5 text-xs text-emerald-800 animate-fadeIn">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">Welcome to RK Tours!</span> Your profile is active. Redirecting to signature itineraries...
              </div>
            </div>
          )}

          {/* Error Notification */}
          {errorMsg && (
            <div className="mb-4 rounded-2xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
              {errorMsg}
            </div>
          )}

          {/* Main Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Full Name <span className="text-amber-600">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Lady Vivienne Kensington"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vivienne@luxury.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm Password Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Password <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Min 6 characters"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-10 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-slate-400 hover:text-slate-700 focus:outline-none p-0.5"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Confirm Password <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Re-type password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-10 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2 text-slate-400 hover:text-slate-700 focus:outline-none p-0.5"
                    title={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Strength Indicator Bar */}
            {formData.password && (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>Password Security:</span>
                  <span className="font-semibold text-slate-700">
                    {strengthScore <= 1 && 'Basic'}
                    {strengthScore === 2 && 'Fair'}
                    {strengthScore === 3 && 'Good'}
                    {strengthScore === 4 && 'Excellent (Strong)'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      strengthScore >= 1 ? 'bg-amber-400' : 'bg-transparent'
                    }`}
                  />
                  <div
                    className={`h-full rounded-full transition-all ${
                      strengthScore >= 2 ? 'bg-amber-500' : 'bg-transparent'
                    }`}
                  />
                  <div
                    className={`h-full rounded-full transition-all ${
                      strengthScore >= 3 ? 'bg-emerald-500' : 'bg-transparent'
                    }`}
                  />
                  <div
                    className={`h-full rounded-full transition-all ${
                      strengthScore >= 4 ? 'bg-emerald-600' : 'bg-transparent'
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Terms and Conditions Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="rounded border-slate-300 text-[#d5ab56] focus:ring-[#d5ab56] mt-0.5"
                />
                <span>
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={() => setTermsModalOpen(true)}
                    className="text-[#9d7b3d] font-semibold hover:underline"
                  >
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    onClick={() => setTermsModalOpen(true)}
                    className="text-[#9d7b3d] font-semibold hover:underline"
                  >
                    Privacy Policy
                  </button>
                  .
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#b3832f] py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Creating Luxury Profile...' : 'Create Account'}</span>
              <ArrowRight className="h-4 w-4 text-[#f6e5b4]" />
            </button>
          </form>

          {/* Social Register */}
          <div className="relative my-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Or sign up with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialRegister('Google')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 py-2 px-4 text-xs font-semibold text-slate-700 transition hover:bg-white hover:border-[#d5ab56]/60 hover:shadow-xs active:scale-[0.98]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialRegister('Apple')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 py-2 px-4 text-xs font-semibold text-slate-700 transition hover:bg-white hover:border-[#d5ab56]/60 hover:shadow-xs active:scale-[0.98]"
            >
              <svg className="h-4 w-4 fill-slate-900" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.66-.82 1.11-1.96.99-3.11-1 .04-2.18.68-2.87 1.49-.6.7-1.13 1.83-.99 2.94 1.12.09 2.21-.5 2.87-1.32z" />
              </svg>
              <span>Apple ID</span>
            </button>
          </div>

          {/* Login Redirect Footer */}
          <div className="mt-4 text-center text-xs text-slate-500 border-t border-slate-100 pt-3">
            <span>Already have a membership account? </span>
            <Link
              to="/login"
              className="font-bold text-[#9d7b3d] hover:text-[#7a5b2d] hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modal */}
      {termsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={() => setTermsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl text-slate-900 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-slate-900">Terms of Service & Privacy Policy</h3>
            <div className="mt-3 space-y-2.5 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>1. Private Concierge Access:</strong> Membership grants privileged access to bespoke itinerary curation, private jet inquiries, and luxury hotel partner benefits.
              </p>
              <p>
                <strong>2. Data Protection:</strong> We employ bank-grade 256-bit encryption. Your personal travel data and passport information are strictly confidential and never sold to third parties.
              </p>
              <p>
                <strong>3. Booking & Cancellation:</strong> All bookings are governed by individual tour and hotel cancellation policies as outlined during the reservation stage.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={() => setTermsModalOpen(false)}
                className="rounded-xl bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-black"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}