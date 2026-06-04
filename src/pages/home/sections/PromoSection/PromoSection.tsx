import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import {
  GameControllerIcon,
  HammerIcon,
  PaintBrushIcon,
  PlayIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import sunburstBg from "@/assets/sunburt-bg.webp";
import vibrantVentureCharacters from "@/assets/vibrant-venture-characters.webp";
import violastroIcon from "@/assets/violastro-icon.png";
import { FeaturePill } from "@/pages/home/sections/PromoSection/components/FeaturePill";
import classes from "./PromoSection.module.css";

const FEATURES = [
  { icon: GameControllerIcon, label: "Controller Support" },
  { icon: HammerIcon, label: "Level Builder" },
  { icon: PaintBrushIcon, label: "Pet Maker" },
  { icon: UsersThreeIcon, label: "Online Multiplayer" },
];

export function PromoSection() {
  return (
    <Box className={classes.section}>
      <Box className={classes.backdrop}>
        <BackgroundImage src={sunburstBg} className={classes.sunburst} />
      </Box>

      <Container size="xl" py={{ base: 52, md: 52 }}>
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 40, md: 80 }}
        >
          <Card
            className={classes.card}
            flex={1}
            w="100%"
            miw={0}
            radius="lg"
            padding="xl"
          >
            <Flex
              direction="column"
              gap="md"
              align={{ base: "center", md: "flex-start" }}
            >
              <Title
                order={2}
                fz={{ base: 28, sm: 38 }}
                fw={800}
                lh={1.15}
                ta={{ base: "center", md: "left" }}
                className={classes.title}
              >
                An adventure bursting with color
              </Title>

              <Text
                fz={{ base: "md", sm: "lg" }}
                ta={{ base: "center", md: "left" }}
              >
                The dastardly{" "}
                <img
                  src={violastroIcon}
                  alt=""
                  className={classes.violastroIcon}
                />{" "}
                <span className={classes.violastroName}>Violastro</span> has
                stolen the Power Crystals!
              </Text>

              <Text
                fz={{ base: "md", sm: "lg" }}
                ta={{ base: "center", md: "left" }}
              >
                Swap between four quirky heroes and combine their unique
                abilities for fluid, versatile movement as you chase him down
                across vibrant 2D worlds.
              </Text>

              <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "center", md: "flex-start" }}
                wrap="wrap"
                gap="xs"
              >
                {FEATURES.map(({ icon, label }) => (
                  <FeaturePill key={label} icon={icon} label={label} />
                ))}
              </Flex>

              <Flex
                gap="md"
                mt="sm"
                wrap="wrap"
                justify={{ base: "center", md: "flex-start" }}
              >
                <Button
                  className={classes.playButton}
                  size="md"
                  variant="gradient"
                  gradient={{ from: "red", to: "pink", deg: 45 }}
                  leftSection={<PlayIcon size={18} weight="fill" />}
                >
                  Play Now
                </Button>
                <Button size="md" variant="default">
                  Learn More
                </Button>
              </Flex>
            </Flex>
          </Card>

          <Image
            src={vibrantVentureCharacters}
            className={classes.characters}
            fit="contain"
            w={{ base: 280, md: 520 }}
          />
        </Flex>
      </Container>
    </Box>
  );
}
