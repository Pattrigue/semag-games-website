import { Stack, Text, Title } from "@mantine/core";
import { Eyebrow } from "@/components/Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  /** Mantine color for the eyebrow label. */
  eyebrowColor?: string;
  title: string;
  /** Mantine color for the title (e.g. "white" on dark sections). */
  titleColor?: string;
  subtitle?: string;
  /** Max width for the heading block (constrains the subtitle line length). */
  maw?: number;
}

/** Centered section header: an eyebrow label, a title, and an optional subtitle. */
export function SectionHeading({
  eyebrow,
  eyebrowColor = "pink.6",
  title,
  titleColor,
  subtitle,
  maw,
}: SectionHeadingProps) {
  return (
    <Stack gap="sm" align="center" maw={maw} mx="auto">
      <Eyebrow c={eyebrowColor}>{eyebrow}</Eyebrow>

      <Title
        order={2}
        ta="center"
        fz={{ base: 30, sm: 40 }}
        fw={800}
        c={titleColor}
      >
        {title}
      </Title>

      {subtitle ? (
        <Text ta="center" fz={{ base: "md", sm: "lg" }}>
          {subtitle}
        </Text>
      ) : null}
    </Stack>
  );
}
