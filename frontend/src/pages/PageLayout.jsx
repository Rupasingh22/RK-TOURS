function PageLayout({ eyebrow, title, description, action, children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 inline-flex items-center rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a5b2d]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{description}</p>
        ) : null}
      </div>

      {action ? <div className="mb-8">{action}</div> : null}

      {children}
    </section>
  )
}

export default PageLayout
