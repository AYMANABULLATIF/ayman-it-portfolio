import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, labels }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-support/40 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-calm dark:text-teal-300">
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-ink dark:text-white">
            {project.title}
          </h3>
          <div className="mt-4 rounded-md border border-blue-100 bg-blue-50 p-4 dark:border-sky-300/20 dark:bg-sky-400/10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-support dark:text-sky-300">
              Recruiter signal
            </p>
            <p className="mt-1 text-sm font-medium leading-6 text-slate-800 dark:text-slate-100">
              {project.recruiterValue}
            </p>
          </div>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a className="btn btn-primary" href={project.liveDemo} target="_blank" rel="noreferrer">
            <ExternalLink size={17} aria-hidden="true" />
            {labels.liveDemo}
          </a>
          <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" />
            {labels.sourceCode}
          </a>
        </div>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {project.bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-support" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          {labels.technologies}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
