"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 810;

type ProjectLivePreviewProps = {
  url: string;
  title: string;
  className?: string;
};

export function ProjectLivePreview({
  url,
  title,
  className = "",
}: ProjectLivePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      setScale(el.clientWidth / DESKTOP_WIDTH);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="origin-top-left"
        style={{
          width: DESKTOP_WIDTH,
          height: DESKTOP_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        <iframe
          src={url}
          title={title}
          width={DESKTOP_WIDTH}
          height={DESKTOP_HEIGHT}
          className="pointer-events-none border-0"
        />
      </div>
    </div>
  );
}
