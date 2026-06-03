import type { Icon } from "@phosphor-icons/react";

export interface Spotlight {
  icon: Icon;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  accent: string; // Mantine color key
  cta: string;
  href: string;
}
