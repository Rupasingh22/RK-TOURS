import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Compass,
  Star,
} from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    identifier: '', // Email or Phone Number
    password: '',
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [forgotModalOpen, setForgotModalOpen] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotSent, setForgotSent] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.identifier.trim()) {
      setErrorMsg('Please enter your email address or phone number.')
      return
    }

    if (!formData.password || formData.password.length < 6) {
      setErrorMsg('Please enter your password (minimum 6 characters).')
      return
    }

    setIsSubmitting(true)

    // Simulate luxury authentication response
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/tours/tour-details')
      }, 1200)
    }, 800)
  }

  const handleSocialLogin = (provider) => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }, 700)
  }

  const handleForgotSubmit = (e) => {
    e.preventDefault()
    if (forgotEmail) {
      setForgotSent(true)
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f8f5f0] text-slate-900 selection:bg-[#d5ab56] selection:text-slate-950 font-sans py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 grid lg:grid-cols-12 min-h-[580px]">
        {/* LEFT COLUMN: Cinematic Travel Visual & Luxury Quotes (5 cols) */}
        <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-8 text-white overflow-hidden bg-slate-950">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury Alpine Voyage"
              className="h-full w-full object-cover object-center brightness-[0.45] filter transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
          </div>

          {/* Top Brand Tag */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/40 bg-black/40 px-3 py-1 text-xs font-semibold tracking-wide text-[#f6e5b4] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Private Member Sanctuary</span>
            </div>
          </div>

          {/* Center Quote */}
          <div className="relative z-10 my-auto py-6">
            <div className="flex text-[#d5ab56] gap-1 mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#d5ab56]" />
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              "Travel is the only expense that makes you richer in unforgettable memories."
            </h3>
            <p className="mt-3 text-xs text-slate-300 font-light leading-relaxed">
              Unlock access to your bespoke travel itineraries, saved 5-star suites, private jet charters, and direct concierge chat.
            </p>
          </div>

          {/* Bottom Security Trust Badge */}
          <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>256-Bit Encrypted Security</span>
            </div>
            <span className="text-[#d5ab56]">RK Tours & Concierge</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Modern Luxury Login Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fffaf1] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 mb-2">
              <Compass className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Welcome Back</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Sign In to Your <span className="gold-gradient-text">Account</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Enter your credentials to manage bookings, track itineraries, and connect with your butler.
            </p>
          </div>

          {/* Success Notification */}
          {isSuccess && (
            <div className="mb-5 flex items-center gap-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 p-3.5 text-xs text-emerald-800 animate-fadeIn">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">Welcome back!</span> Redirecting to your luxury travel dashboard...
              </div>
            </div>
          )}

          {/* Error Notification */}
          {errorMsg && (
            <div className="mb-5 rounded-2xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
              {errorMsg}
            </div>
          )}

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email / Phone Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address or Phone Number
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  placeholder="e.g. member@rktours.com or +91 98765 43210"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                />
              </div>
            </div>

            {/* Password Field with Toggle */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(true)}
                  className="text-xs font-medium text-[#9d7b3d] hover:text-[#7a5b2d] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your private password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700 focus:outline-none p-0.5"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="rounded border-slate-300 text-[#d5ab56] focus:ring-[#d5ab56]"
                />
                <span>Remember this device for 30 days</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#b3832f] py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Verifying Credentials...' : 'Sign In to Portal'}</span>
              <ArrowRight className="h-4 w-4 text-[#f6e5b4]" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Or continue with
            </span>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 px-4 text-xs font-semibold text-slate-700 transition hover:bg-white hover:border-[#d5ab56]/60 hover:shadow-xs active:scale-[0.98]"
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
              onClick={() => handleSocialLogin('Apple')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 px-4 text-xs font-semibold text-slate-700 transition hover:bg-white hover:border-[#d5ab56]/60 hover:shadow-xs active:scale-[0.98]"
            >
              <svg className="h-4 w-4 fill-slate-900" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.66-.82 1.11-1.96.99-3.11-1 .04-2.18.68-2.87 1.49-.6.7-1.13 1.83-.99 2.94 1.12.09 2.21-.5 2.87-1.32z" />
              </svg>
              <span>Apple ID</span>
            </button>
          </div>

          {/* Registration Redirect Footer */}
          <div className="mt-6 text-center text-xs text-slate-500 border-t border-slate-100 pt-4">
            <span>Don't have an account yet? </span>
            <Link
              to="/register"
              className="font-bold text-[#9d7b3d] hover:text-[#7a5b2d] hover:underline"
            >
              Create a Luxury Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={() => setForgotModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {!forgotSent ? (
              <form onSubmit={handleForgotSubmit}>
                <h3 className="text-lg font-bold text-slate-900">Reset Your Password</h3>
                <p className="mt-1 text-xs text-slate-600">
                  Enter your registered email address and our concierge will dispatch a secure reset link.
                </p>
                <div className="mt-4">
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#d5ab56] focus:outline-none"
                  />
                </div>
                <div className="mt-5 flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-black"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h4 className="mt-2 text-base font-bold text-slate-900">Reset Instructions Sent!</h4>
                <p className="mt-1 text-xs text-slate-600">
                  We have dispatched a private recovery link to <strong>{forgotEmail}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForgotModalOpen(false)
                    setForgotSent(false)
                    setForgotEmail('')
                  }}
                  className="mt-4 rounded-xl bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-black"
                >
                  Return to Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}