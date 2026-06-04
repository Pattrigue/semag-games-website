import { Stack, Title } from "@mantine/core";
import classes from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  titleColor?: string;
  maw?: number;
}

export function SectionHeading({
  title,
  titleColor,
  maw,
}: SectionHeadingProps) {
  return (
    <Stack gap="sm" align="center" maw={maw} mx="auto">
      <Title
        order={2}
        ta="center"
        fz={{ base: 33, sm: 44 }}
        fw={400}
        c={titleColor}
        className={classes.title}
      >
        {title}
      </Title>
    </Stack>
  );
}
