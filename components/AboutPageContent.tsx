"use client";

import Image from "next/image";
import { SiteContainer } from "@/components/SiteContainer";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";

export function AboutPageContent() {
  const { t } = useLanguage();
  const { contact } = site.about;

  return (
    <SiteContainer className="pb-8 text-sm md:pb-10 md:text-base">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
          <Image
            src={site.about.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 400px"
            priority
          />
        </div>

        <div className="space-y-4 text-ink">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="space-y-3 pt-2">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                {t.about.address}
              </p>
              {contact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                {t.about.email}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
            </div>

            {contact.phone ? (
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                  {t.about.phone}
                </p>
                <p>{contact.phone}</p>
              </div>
            ) : null}

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                {t.about.github}
              </p>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {contact.github.replace(/^https?:\/\//, "")}
              </a>
            </div>

            {contact.instagram ? (
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">
                  {t.about.instagram}
                </p>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {contact.instagram.replace(/^https?:\/\//, "")}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SiteContainer>
  );
}
