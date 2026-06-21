export default function Timeline({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article
          key={`${item.company}-${item.period}`}
          className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-ink dark:text-white">
                {item.company} - {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.location}
              </p>
            </div>
            <p className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
              {item.period}
            </p>
          </div>
          {item.relevance && (
            <div className="mt-4 rounded-md border border-teal-100 bg-teal-50 p-3 dark:border-teal-300/20 dark:bg-teal-400/10">
              <p className="text-sm font-medium leading-6 text-slate-800 dark:text-slate-100">
                {item.relevance}
              </p>
            </div>
          )}
          <ul className="mt-5 grid gap-2">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-calm" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
