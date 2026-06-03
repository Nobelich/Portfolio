"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { isProjectReady } from "@/data/projects";
import { getProjectCopy } from "@/data/i18n";
import { ProjectLivePreview } from "@/components/ProjectLivePreview";
import { ProjectNav } from "@/components/ProjectNav";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectDetailProps = {
  project: Project;
  projects: Project[];
};

export function ProjectDetail({ project, projects }: ProjectDetailProps) {
  const { locale, t } = useLanguage();
  const copy = getProjectCopy(locale, project.slug);
  const ready = isProjectReady(project);

  return (
    <div className="space-y-6">
      {ready ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video w-full overflow-hidden bg-surface transition-opacity hover:opacity-95"
          style={{ backgroundColor: project.bgColor }}
          aria-label={t.project.openLiveSiteAria(copy.title)}
        >
          <ProjectLivePreview
            url={project.liveUrl}
            title={t.project.previewOf(copy.title)}
          />
        </a>
      ) : (
        <div
          className="relative aspect-video w-full overflow-hidden bg-surface"
          style={{ backgroundColor: project.bgColor }}
        >
          <Image
            src={project.thumbnail}
            alt=""
            fill
            unoptimized={project.thumbnail.endsWith(".svg")}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 75rem"
            priority
          />
        </div>
      )}

      <div className="space-y-6 text-sm md:text-base">
        <div className="space-y-4">
          <h2 className="text-base font-bold tracking-tight text-ink md:text-lg">
            {copy.title}
          </h2>

          <div className="max-w-2xl space-y-4">
            {copy.description.map((paragraph, index) => (
              <p
                key={`${project.slug}-${index}`}
                className="leading-relaxed text-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {ready || project.repoUrl ? (
          <div className="flex flex-wrap gap-3">
            {ready ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border bg-ink px-5 py-2.5 text-base font-medium text-page transition-colors hover:bg-muted hover:text-page"
              >
                {t.project.openLiveSite}
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border px-5 py-2.5 text-base font-medium text-ink transition-colors hover:bg-surface"
              >
                {t.project.viewOnGitHub}
              </a>
            ) : null}
          </div>
        ) : null}

        <ProjectNav projects={projects} currentSlug={project.slug} />
      </div>
    </div>
  );
}
