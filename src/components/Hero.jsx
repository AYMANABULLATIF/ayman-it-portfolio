import { ArrowDown, ExternalLink, FileDown, Github, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/profile';

export default function Hero({ t }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,118,110,0.14),transparent_30%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-66px)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="min-w-0">
          <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <MapPin size={16} aria-hidden="true" />
            <span>{personal.location}</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>English fluent / Japanese daily conversation</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-full break-words text-xl font-semibold leading-tight text-support dark:text-sky-300 sm:text-2xl">
            {t.heroTitle}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t.heroTagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Focused on user support, clear documentation, careful escalation, and practical
            troubleshooting in Japanese workplace environments.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {t.heroBullets.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects">
              <ArrowDown size={18} aria-hidden="true" />
              {t.viewProjects}
            </a>
            <a
              className="btn btn-secondary"
              href={personal.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              {t.viewGithub}
            </a>
            <a className="btn btn-secondary" href={`mailto:${personal.email}`}>
              <Mail size={18} aria-hidden="true" />
              {t.contactMe}
            </a>
            <a className="btn btn-quiet" href={personal.resumePath} download>
              <FileDown size={18} aria-hidden="true" />
              {t.downloadResume}
            </a>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
          <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
            <div>
              <p className="text-sm font-semibold text-ink dark:text-white">
                Support Readiness Snapshot
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ヘルプデスク応募向けプロフィール
              </p>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-400/10 dark:text-teal-200">
              Available
            </span>
          </div>

          <div className="grid gap-3">
            {[
                ['Target', 'Entry-level IT Support / Helpdesk / Desktop Support'],
                ['Project evidence', 'Ticket triage, KB search, users, assets, incidents, audit logs'],
                ['Technical base', 'Windows, Linux, networking basics, monitoring, SQL'],
                ['Japan readiness', 'Daily Japanese communication, safety, accuracy, reporting'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-md bg-slate-900 p-4 font-mono text-xs leading-6 text-slate-100 dark:bg-black">
            <p>&gt; ticket.status: triaged</p>
            <p>&gt; user.language: English / Japanese daily conversation</p>
            <p>&gt; next_step: interview_ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}
