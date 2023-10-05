"use client";

import { useEffect } from "react";

interface ContentProps {
  className: any;
  content: string;
}

export const Iframe = ({ className, content }: ContentProps) => {
  useEffect(() => {
    const iframely = (window as any).iframely;
    if (iframely) {
      iframely.load();
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className={className}
    />
  );
};