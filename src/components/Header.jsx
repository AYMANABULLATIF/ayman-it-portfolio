import { Moon, Sun } from 'lucide-react';

export default function Header({ labels, language, onLanguageChange, isDark, onThemeToggle }) {
  const anchors = ['about', 'projects', 'skills', 'experience', 'contact'];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Ayman Abdullatif home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
            AA
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-ink dark:text-white">
              Ayman Abdullatif
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              IT Support Portfolio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {anchors.map((anchor, index) => (
            <a key={anchor} className="transition hover:text-support" href={`#${anchor}`}>
              {labels[index]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onLanguageChange}
            className="rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-support hover:text-support dark:border-white/10 dark:text-slate-200"
            aria-label="Toggle language between English and Japanese"
          >
            {language === 'en' ? '日本語' : 'EN'}
          </button>
          <button
            type="button"
            onClick={onThemeToggle}
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-700 transition hover:border-support hover:text-support dark:border-white/10 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
