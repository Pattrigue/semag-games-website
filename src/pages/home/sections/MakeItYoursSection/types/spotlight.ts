import type { ComponentType, SVGProps } from "react";

export interface Spotlight {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  accent: string; // CSS color
  cta: string;
  href: string;
}
