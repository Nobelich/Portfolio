"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteContainer } from "@/components/SiteContainer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";

const navLinkClass = (active: boolean) =>
  [
    "text-base font-medium tracking-wide transition-colors",
    active ? "text-ink" : "text-muted hover:text-ink",
  ].join(" ");

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const isWork = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <header className="bg-page">
      <SiteContainer className="flex items-center justify-between py-6 md:py-8">
        <Link
          href="/"
          className="text-2xl font-bold uppercase tracking-wider text-ink md:text-3xl"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-6 md:gap-8" aria-label={t.nav.main}>
            <Link
              href="/"
              className={navLinkClass(isWork)}
              aria-current={isWork ? "page" : undefined}
            >
              {t.nav.work}
            </Link>
            <Link
              href="/about"
              className={navLinkClass(isAbout)}
              aria-current={isAbout ? "page" : undefined}
            >
              {t.nav.about}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </SiteContainer>
    </header>
  );
}
