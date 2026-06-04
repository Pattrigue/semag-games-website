import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BlocksIcon from "pixelarticons/svg/blocks.svg?react";
import BrushIcon from "pixelarticons/svg/brush.svg?react";
import GamepadIcon from "pixelarticons/svg/gamepad.svg?react";
import UsersIcon from "pixelarticons/svg/users.svg?react";
import VideoIcon from "pixelarticons/svg/video.svg?react";
import PlayFilledIcon from "@/assets/icons/play-filled.svg?react";
import sunburstBg from "@/assets/sunburt-bg.webp";
import vibrantVentureCharacters from "@/assets/vibrant-venture-characters.webp";
import violastroIcon from "@/assets/violastro-icon.png";
import { TrailerModal } from "@/pages/home/sections/PromoSection/components/TrailerModal";
import { STEAM_URL } from "@/utils/urls";
import classes from "./PromoSection.module.css";

// Pill colors are the four playable characters' palette colors.
const FEATURES = [
  { icon: GamepadIcon, label: "Controller Support", color: "rgb(224, 91, 79)" },
  { icon: BlocksIcon, label: "Level Builder", color: "rgb(79, 195, 79)" },
  { icon: BrushIcon, label: "Pet Maker", color: "rgb(79, 170, 224)" },
  { icon: UsersIcon, label: "Online Multiplayer", color: "rgb(255, 178, 0)" },
];

export function PromoSection() {
  const [trailerOpened, { open: openTrailer, close: closeTrailer }] =
    useDisclosure(false);

  return (
    <Box className={classes.section}>
      <Box className={classes.backdrop}>
        <BackgroundImage src={sunburstBg} className={classes.sunburst} />
      </Box>

      <Container size={1510} py={{ base: 52, md: 52 }}>
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 40, md: 80, lg: 120 }}
        >
          <Card
            className={classes.card}
            flex={1}
            w="100%"
            miw={0}
            radius="lg"
            padding="sm"
          >
            {/* Title sits in its own dark container plaque, above the tan
                text panel — like the game's menu titles. */}
            <Box className={classes.titlePlaque}>
              <Title
                order={2}
                fz={{ base: 22, sm: 33 }}
                fw={400}
                lh={1.15}
                ta="center"
                className={classes.title}
              >
                An Adventure Bursting With Color!
              </Title>
            </Box>

            <Flex
              className={classes.innerPanel}
              direction="column"
              gap="md"
              align="center"
            >
              <Text fz={22} lh={1.4} ta="center">
                The dastardly{" "}
                <img
                  src={violastroIcon}
                  alt=""
                  className={classes.violastroIcon}
                />{" "}
                <span className={classes.violastroName}>Violastro</span> has
                stolen the Power Crystals!
              </Text>

              <Text fz={22} lh={1.4} ta="center">
                Swap between four quirky heroes and combine their unique
                abilities for fluid, versatile movement as you chase him down
                across vibrant 2D worlds.
              </Text>

              <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                wrap="wrap"
                gap="xs"
              >
                {FEATURES.map(({ icon: FeatureIcon, label, color }) => (
                  <Badge
                    key={label}
                    variant="filled"
                    color={color}
                    radius="xl"
                    leftSection={<FeatureIcon width={20} height={20} />}
                  >
                    {label}
                  </Badge>
                ))}
              </Flex>

            </Flex>

            {/* Buttons live on the striped card surface, outside the tan
                text panel — matching the game's menus. */}
            <Flex gap="md" mt="md" mb="xs" wrap="wrap" justify="center">
              <Button
                component="a"
                href={STEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant="filled"
                leftSection={<PlayFilledIcon width={22} height={22} />}
              >
                Play Now
              </Button>
              <Button
                size="md"
                variant="default"
                leftSection={<VideoIcon width={22} height={22} />}
                onClick={openTrailer}
              >
                Watch Trailer
              </Button>
            </Flex>
          </Card>

          <Image
            src={vibrantVentureCharacters}
            className={classes.characters}
            fit="contain"
            w={{ base: 280, md: 480 }}
          />
        </Flex>
      </Container>

      <TrailerModal opened={trailerOpened} onClose={closeTrailer} />
    </Box>
  );
}
