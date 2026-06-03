"use client";

import { localeLabels, locales } from "@/data/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 text-sm font-medium"
      role="group"
      aria-label="Language"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 ? (
            <span className="text-muted" aria-hidden>
              /
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={[
              "transition-colors",
              locale === code
                ? "text-ink"
                : "text-muted hover:text-ink",
            ].join(" ")}
            aria-pressed={locale === code}
          >
            {localeLabels[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
