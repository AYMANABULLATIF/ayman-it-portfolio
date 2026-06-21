export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-support dark:text-sky-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-base font-medium text-calm dark:text-teal-300">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
