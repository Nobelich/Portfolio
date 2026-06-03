"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { isProjectReady } from "@/data/projects";
import { getProjectCopy } from "@/data/i18n";
import { ProjectLivePreview } from "@/components/ProjectLivePreview";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { locale } = useLanguage();
  const copy = getProjectCopy(locale, project.slug);
  const ready = isProjectReady(project);

  const handleActivate = () => {
    onSelect(project);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      className={[
        "group relative aspect-video w-full cursor-pointer overflow-hidden focus-within:ring-2 focus-within:ring-ink focus-within:ring-offset-2 focus-within:ring-offset-page",
        !ready && "opacity-60",
      ].join(" ")}
      style={{ backgroundColor: project.bgColor }}
      role="button"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      aria-label={copy.title}
    >
      {ready ? (
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none">
          <ProjectLivePreview
            url={project.liveUrl}
            title={copy.title}
          />
        </div>
      ) : (
        <Image
          src={project.thumbnail}
          alt=""
          fill
          unoptimized={project.thumbnail.endsWith(".svg")}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      )}

      <div
        className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
        aria-hidden
      >
        <h2 className="text-xl font-bold text-white md:text-2xl">{copy.title}</h2>
      </div>
    </article>
  );
}
