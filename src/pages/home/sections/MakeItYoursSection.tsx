import type { CSSProperties } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  CaretDoubleRightIcon,
  CheckCircleIcon,
  HammerIcon,
  type Icon,
  PaintBrushIcon,
  SteamLogoIcon,
} from "@phosphor-icons/react";
import levelBuilderImg from "@/assets/level-builder.webp";
import petMakerImg from "@/assets/pet-maker.webp";
import classes from "./MakeItYoursSection.module.css";

interface Spotlight {
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

const SPOTLIGHTS: Spotlight[] = [
  {
    icon: HammerIcon,
    tag: "Level Builder",
    title: "Build worlds, your way",
    description:
      "Drop in platforms, hazards, and secrets with an editor that's as fun as the game itself — no code, no limits.",
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

function SpotlightRow({
  data,
  reversed,
}: {
  data: Spotlight;
  reversed: boolean;
}) {
  const {
    icon: FeatureIcon,
    tag,
    title,
    description,
    bullets,
    image,
    accent,
    cta,
    href,
  } = data;
  const accentVar = `var(--mantine-color-${accent}-5)`;

  return (
    <Flex
      direction={{ base: "column", md: reversed ? "row-reverse" : "row" }}
      align="center"
      gap={{ base: 32, md: 64 }}
    >
      <Box
        flex={1.25}
        w="100%"
        miw={0}
        className={classes.imageWrap}
        style={{ "--accent": accentVar } as CSSProperties}
      >
        <Image
          src={image}
          alt={tag}
          radius="lg"
          h={{ base: 260, sm: 420 }}
          fit="cover"
          className={classes.image}
        />
      </Box>

      <Stack flex={1} miw={0} gap="md" align="flex-start">
        <Badge
          color={accent}
          variant="light"
          size="lg"
          radius="sm"
          leftSection={<FeatureIcon size={14} weight="bold" />}
        >
          {tag}
        </Badge>

        <Title order={3} fz={{ base: 26, sm: 34 }} fw={800} lh={1.15}>
          {title}
        </Title>

        <Text fz={{ base: "md", sm: "lg" }}>{description}</Text>

        <Stack gap="xs" mt={4}>
          {bullets.map((bullet) => (
            <Group key={bullet} gap="sm" wrap="nowrap" align="center">
              <CheckCircleIcon size={20} weight="fill" color={accentVar} />
              <Text fw={500}>{bullet}</Text>
            </Group>
          ))}
        </Stack>

        <Button
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          color={accent}
          size="md"
          radius="md"
          mt="sm"
          leftSection={<SteamLogoIcon size={20} weight="fill" />}
          rightSection={<CaretDoubleRightIcon size={16} weight="bold" />}
        >
          {cta}
        </Button>
      </Stack>
    </Flex>
  );
}

export function MakeItYoursSection() {
  return (
    <Box component="section" className={classes.section} py={{ base: 64, md: 96 }}>
      <Box aria-hidden className={classes.blobs}>
        <Box className={`${classes.blob} ${classes.blob1}`} />
        <Box className={`${classes.blob} ${classes.blob2}`} />
        <Box className={`${classes.blob} ${classes.blob3}`} />
        <Box className={`${classes.blob} ${classes.blob4}`} />
      </Box>

      <Container size="lg" className={classes.content}>
        <Flex direction="column" gap={{ base: 56, md: 72 }}>
          <Stack gap="sm" align="center" maw={640} mx="auto">
            <Text
              fz="sm"
              fw={700}
              tt="uppercase"
              c="grape.6"
              className={classes.eyebrow}
            >
              Create
            </Text>
            <Title order={2} ta="center" fz={{ base: 30, sm: 40 }} fw={800}>
              Make It Yours
            </Title>
            <Text ta="center" fz={{ base: "md", sm: "lg" }}>
              The adventure doesn't end when the credits roll. Build your own
              levels and craft one-of-a-kind companions, then share them with the
              world.
            </Text>
          </Stack>

          {SPOTLIGHTS.map((data, i) => (
            <SpotlightRow key={data.tag} data={data} reversed={i % 2 === 1} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
