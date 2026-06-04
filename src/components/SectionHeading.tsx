import { Stack, Title } from "@mantine/core";

interface SectionHeadingProps {
  title: string;
  /** Mantine color for the title (e.g. "white" on dark sections). */
  titleColor?: string;
  /** Max width for the heading block. */
  maw?: number;
}

/** Centered section header. */
export function SectionHeading({ title, titleColor, maw }: SectionHeadingProps) {
  return (
    <Stack gap="sm" align="center" maw={maw} mx="auto">
      <Title order={2} ta="center" fz={{ base: 30, sm: 40 }} fw={800} c={titleColor}>
        {title}
      </Title>
    </Stack>
  );
}
