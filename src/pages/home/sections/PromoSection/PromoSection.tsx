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
import {
  FilmSlateIcon,
  GameControllerIcon,
  HammerIcon,
  PaintBrushIcon,
  PlayIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import sunburstBg from "@/assets/sunburt-bg.webp";
import vibrantVentureCharacters from "@/assets/vibrant-venture-characters.webp";
import violastroIcon from "@/assets/violastro-icon.png";
import { TrailerModal } from "@/pages/home/sections/PromoSection/components/TrailerModal";
import { STEAM_URL } from "@/utils/urls";
import classes from "./PromoSection.module.css";

// Pill colors match the four playable characters: red, green, blue, yellow.
const FEATURES = [
  { icon: GameControllerIcon, label: "Controller Support", color: "#e04f4f" },
  { icon: HammerIcon, label: "Level Builder", color: "#4caf50" },
  { icon: PaintBrushIcon, label: "Pet Maker", color: "#4aa8e0" },
  { icon: UsersThreeIcon, label: "Online Multiplayer", color: "#e0a52e" },
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
            <Flex
              className={classes.innerPanel}
              direction="column"
              gap="md"
              align="center"
            >
              <Title
                order={2}
                fz={{ base: 33, sm: 44 }}
                fw={400}
                lh={1.15}
                ta="center"
                className={classes.title}
              >
                An adventure bursting with color
              </Title>

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
                    leftSection={<FeatureIcon size={18} weight="bold" />}
                  >
                    {label}
                  </Badge>
                ))}
              </Flex>

              <Flex gap="md" mt="sm" wrap="wrap" justify="center" w="100%">
                <Button
                  component="a"
                  href={STEAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="filled"
                  leftSection={<PlayIcon size={18} weight="fill" />}
                >
                  Play Now
                </Button>
                <Button
                  size="md"
                  variant="default"
                  leftSection={<FilmSlateIcon size={18} weight="fill" />}
                  onClick={openTrailer}
                >
                  Watch Trailer
                </Button>
              </Flex>
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
