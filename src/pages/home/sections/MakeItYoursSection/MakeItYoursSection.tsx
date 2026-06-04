import { Box, Container, Flex, Stack, Text } from "@mantine/core";
import { HammerIcon, PaintBrushIcon } from "@phosphor-icons/react";
import levelBuilderImg from "@/assets/level-builder.webp";
import petMakerImg from "@/assets/pet-maker.webp";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightRow } from "@/pages/home/sections/MakeItYoursSection/components/SpotlightRow";
import type { Spotlight } from "@/pages/home/sections/MakeItYoursSection/types/spotlight";
import classes from "./MakeItYoursSection.module.css";

const SPOTLIGHTS: Spotlight[] = [
  {
    icon: HammerIcon,
    tag: "Level Builder",
    title: "Build worlds, your way",
    description:
      "Drop in platforms, hazards, and secrets with an editor that's as fun as the game itself. No code, no limits.",
    bullets: [
      "Intuitive drag-and-drop editor",
      "Publish and share in seconds",
      "Play endless community levels",
    ],
    image: levelBuilderImg,
    accent: "indigo",
    cta: "Browse Levels",
    href: "https://steamcommunity.com/workshop/browse/?appid=1264520&browsesort=trend&section=readytouseitems&p=1&num_per_page=30&days=7&requiredtags%5B%5D=+Level",
  },
  {
    icon: PaintBrushIcon,
    tag: "Pet Maker",
    title: "Design your perfect companion",
    description:
      "Sketch, color, and animate your own pixel-art pets, then bring them along on every adventure.",
    bullets: [
      "Pixel-perfect art tools",
      "Frame-by-frame animation",
      "Show your creations off online",
    ],
    image: petMakerImg,
    accent: "pink",
    cta: "Browse Pets",
    href: "https://steamcommunity.com/workshop/browse/?appid=1264520&section=readytouseitems&p=1&requiredtags%5B%5D=Pet",
  },
];

export function MakeItYoursSection() {
  return (
    <Box
      component="section"
      className={classes.section}
      py={{ base: 64, md: 96 }}
    >
      <Box aria-hidden className={classes.blobs}>
        <Box className={`${classes.blob} ${classes.blob1}`} />
        <Box className={`${classes.blob} ${classes.blob2}`} />
        <Box className={`${classes.blob} ${classes.blob3}`} />
        <Box className={`${classes.blob} ${classes.blob4}`} />
      </Box>

      <Container size="xl" className={classes.content}>
        <Flex direction="column" gap={{ base: 56, md: 72 }}>
          <Stack>
            <SectionHeading
              eyebrow="Create"
              eyebrowColor="grape.6"
              title="Make It Yours"
              maw={640}
            />

            <Stack gap={0}>
              <Text ta="center" fz={{ base: "md", sm: "lg" }}>
                The adventure doesn't end when the credits roll.
              </Text>

              <Text ta="center" fz={{ base: "md", sm: "lg" }}>
                Build your own levels and craft one-of-a-kind companions, then
                share them with the world.
              </Text>
            </Stack>
          </Stack>

          {SPOTLIGHTS.map((data, i) => (
            <SpotlightRow key={data.tag} data={data} reversed={i % 2 === 1} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
