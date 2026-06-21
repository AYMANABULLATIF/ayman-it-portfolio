import { useEffect, useMemo, useState } from 'react';
import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import Timeline from './components/Timeline';
import {
  certifications,
  copy,
  education,
  experience,
  personal,
  projects,
  projectValue,
  quickFit,
  recruiterHighlights,
  skillGroups,
} from './data/profile';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [isDark, setIsDark] = useState(false);
  const t = useMemo(() => copy[language], [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Header
        labels={t.nav}
        language={language}
        onLanguageChange={() => setLanguage((current) => (current === 'en' ? 'ja' : 'en'))}
        isDark={isDark}
        onThemeToggle={() => setIsDark((current) => !current)}
      />
      <main>
        <Hero t={t} />

        <Section id="about" eyebrow="Profile" title={t.aboutTitle} subtitle={t.aboutSubtitle}>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-lg leading-8 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
              <p>{t.about}</p>
            </div>
            <div className="grid gap-3">
              {quickFit.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 font-medium text-ink dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-900 p-6 text-white shadow-soft dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              30-second recruiter summary
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {recruiterHighlights.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-100">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-teal-300" size={18} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Portfolio Evidence"
          title={t.projectsTitle}
          subtitle={t.projectsSubtitle}
          className="bg-slate-50 dark:bg-slate-900/40"
        >
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} labels={t} />
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-support dark:text-sky-300">
              {t.whySubtitle}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-ink dark:text-white">
              {t.whyTitle}
            </h3>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
              These projects are not presented as enterprise production systems. They are focused,
              hands-on simulations built to show how I think through real support tasks: intake,
              documentation, account/device workflows, incident tracking, and clear communication.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {projectValue.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-900/70"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-calm" size={18} aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Support Toolkit" title={t.skillsTitle} subtitle={t.skillsSubtitle}>
          <p className="mb-6 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
            Skills are grouped around the work expected in entry-level support roles: user issues
            first, then operating systems, network basics, monitoring, data handling, and practical
            tools used to build the portfolio projects.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Work History"
          title={t.experienceTitle}
          subtitle={t.experienceSubtitle}
          className="bg-slate-50 dark:bg-slate-900/40"
        >
          <Timeline items={experience} />
        </Section>

        <Section title={t.educationTitle} subtitle={t.educationSubtitle}>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-blue-50 text-support dark:bg-sky-400/10 dark:text-sky-300">
                  <GraduationCap size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    {education.focus}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {education.school} | {education.year}
                  </p>
                  <a
                    className="btn btn-secondary mt-5"
                    href={personal.certificate}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Graduation Certificate
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-calm dark:bg-teal-400/10 dark:text-teal-300">
                  <Award size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white">
                    {t.certificationsTitle}
                  </h3>
                  <p className="text-sm text-calm dark:text-teal-300">
                    {t.certificationsSubtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-calm" size={17} aria-hidden="true" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Next Step"
          title={t.contactTitle}
          subtitle={t.contactSubtitle}
          className="bg-slate-50 dark:bg-slate-900/40"
        >
          <Contact t={t} />
        </Section>
      </main>
      <footer className="border-t border-slate-200 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ayman Abdullatif.</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
