import { Box, Container, Flex } from "@mantine/core";
import BlocksIcon from "pixelarticons/svg/blocks.svg?react";
import BrushIcon from "pixelarticons/svg/brush.svg?react";
import levelBuilderImg from "@/assets/level-builder.webp";
import petMakerImg from "@/assets/pet-maker.webp";
import ribbonMakeItYours from "@/assets/ribbon-make-it-yours-3x.png";
import { RibbonHeading } from "@/components/RibbonHeading";
import { SpotlightRow } from "@/pages/home/sections/MakeItYoursSection/components/SpotlightRow";
import type { Spotlight } from "@/pages/home/sections/MakeItYoursSection/types/spotlight";
import classes from "./MakeItYoursSection.module.css";

const SPOTLIGHTS: Spotlight[] = [
  {
    icon: BlocksIcon,
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
    accent: "rgb(79, 195, 79)",
    cta: "Browse Levels",
    href: "https://steamcommunity.com/workshop/browse/?appid=1264520&browsesort=trend&section=readytouseitems&p=1&num_per_page=30&days=7&requiredtags%5B%5D=+Level",
  },
  {
    icon: BrushIcon,
    tag: "Pet Maker",
    title: "Design your perfect companion",
    description:
      "Sketch, color, and animate your own pixel-art pets, then bring them along on every adventure.",
    bullets: [
      "Pixel-perfect art tools",
      "Frame-by-frame animation",
      "Show off your creations online",
    ],
    image: petMakerImg,
    accent: "rgb(79, 170, 224)",
    cta: "Browse Pets",
    href: "https://steamcommunity.com/workshop/browse/?appid=1264520&section=readytouseitems&p=1&requiredtags%5B%5D=Pet",
  },
];

export function MakeItYoursSection() {
  return (
    <Box
      component="section"
      className={classes.section}
      pb={{ base: 64, md: 96 }}
    >
      <Container size="xl" className={classes.content}>
        <RibbonHeading src={ribbonMakeItYours} alt="Make It Yours" mb={32} />

        <Flex direction="column" gap={{ base: 56, md: 72 }}>
          {SPOTLIGHTS.map((data, i) => (
            <SpotlightRow key={data.tag} data={data} reversed={i % 2 === 1} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
