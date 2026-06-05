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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  GameControllerIcon,
  HammerIcon,
  PaintBrushIcon,
  PlayIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import ribbonPromo from "@/assets/ribbon-promo-2x.png";
import sunburstBg from "@/assets/sunburt-bg.webp";
import vibrantVentureCharacters from "@/assets/vibrant-venture-characters.webp";
import violastroIcon from "@/assets/violastro-icon.png";
import { GamePanel } from "@/components/GamePanel";
import { TrailerModal } from "@/pages/home/sections/PromoSection/components/TrailerModal";
import { STEAM_URL } from "@/utils/urls";
import classes from "./PromoSection.module.css";

const FEATURES = [
  {
    icon: GameControllerIcon,
    label: "Controller Support",
    color: "rgb(224, 91, 79)",
  },
  { icon: HammerIcon, label: "Level Builder", color: "rgb(79, 195, 79)" },
  { icon: PaintBrushIcon, label: "Pet Maker", color: "rgb(79, 170, 224)" },
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
            <Box component="h2" className={classes.ribbonHeading}>
              <img
                src={ribbonPromo}
                alt="Bursting With Colors"
                className={classes.ribbon}
              />
            </Box>

            <GamePanel mt={36}>
              <Flex direction="column" gap="md" align="center">
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
                      leftSection={<FeatureIcon size={20} weight="fill" />}
                    >
                      {label}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            </GamePanel>

            <Flex gap="md" mt="md" mb="xs" wrap="wrap" justify="center">
              <Button
                component="a"
                href={STEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant="filled"
                rightSection={<PlayIcon size={22} weight="fill" />}
              >
                Play Now
              </Button>
              <Button
                size="md"
                variant="default"
                leftSection={<VideoCameraIcon size={22} weight="fill" />}
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
