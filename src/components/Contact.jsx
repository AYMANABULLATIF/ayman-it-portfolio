import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personal } from '../data/profile';

export default function Contact({ t }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h3 className="text-2xl font-semibold text-ink dark:text-white">
            Open to entry-level IT support interviews in Japan.
          </h3>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            I am looking for IT Support, Helpdesk, Desktop Support, or Junior IT Operations
            opportunities where I can support users, follow procedures carefully, document work,
            and keep improving in English/Japanese workplace environments.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['Can start support conversations in English', 'Daily Japanese workplace communication', 'Prepared to learn local tools and procedures'].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm font-medium leading-6 text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a className="btn btn-secondary" href={personal.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="btn btn-secondary" href={personal.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-3 rounded-md bg-slate-50 p-5 dark:bg-slate-900/70">
          <Info icon={<Mail size={18} />} label="Email" value={personal.email} />
          <Info icon={<Phone size={18} />} label="Phone" value={personal.phone} />
          <Info icon={<MapPin size={18} />} label="Location" value={personal.location} />
          <Info
            label={t.openTo}
            value="IT Support, Helpdesk, Desktop Support, Junior IT Operations"
          />
        </div>
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      {icon && <span className="mt-0.5 text-support dark:text-sky-300">{icon}</span>}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">
          {value}
        </p>
      </div>
    </div>
  );
}
