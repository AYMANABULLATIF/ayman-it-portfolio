export default function SkillCard({ group }) {
  const isCore = group.title === 'Helpdesk & IT Support';

  return (
    <article className={`rounded-lg border p-5 shadow-sm ${isCore ? 'border-blue-200 bg-blue-50/80 dark:border-sky-300/30 dark:bg-sky-400/10' : 'border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]'}`}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-support dark:text-sky-300">
          {group.subtitle}
        </p>
        {isCore && (
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-support shadow-sm dark:bg-white/10 dark:text-sky-200">
            Core
          </span>
        )}
      </div>
      <h3 className="mt-1 text-lg font-semibold text-ink dark:text-white">
        {group.title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
