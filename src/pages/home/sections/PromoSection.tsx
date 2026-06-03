import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import {
  GameControllerIcon,
  HammerIcon,
  PawPrintIcon,
  PlayIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import sunburstBg from "@/assets/sunburt-bg.webp";
import vibrantVentureCharacters from "@/assets/vibrant-venture-characters.webp";
import vvLogo from "@/assets/vv-logo.webp";
import classes from "./PromoSection.module.css";

const FEATURES = [
  { icon: GameControllerIcon, label: "Controller Support" },
  { icon: UsersThreeIcon, label: "Online Multiplayer" },
  { icon: HammerIcon, label: "Level Builder" },
  { icon: PawPrintIcon, label: "Pet Maker" },
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
            radius="lg"
            px="xl"
            pb="xl"
            pt={{ base: 64, sm: 84 }}
            pos="relative"
          >
            <Image
              src={vvLogo}
              alt="Vibrant Venture"
              className={classes.logo}
              w={{ base: 200, sm: 260 }}
              fit="contain"
            />

            <Stack gap="md" align={{ base: "center", md: "flex-start" }}>
              <Text
                c="dimmed"
                fz={{ base: "md", sm: "lg" }}
                ta={{ base: "center", md: "left" }}
              >
                A colorful platformer packed with vibrant worlds, quirky
                characters, and tight, satisfying gameplay. Dive in and play the
                fucking game.
              </Text>

              <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "center", md: "flex-start" }}
                wrap="nowrap"
                gap="xs"
              >
                {FEATURES.map(({ icon: Icon, label }) => (
                  <Box key={label} className={classes.pill}>
                    <Icon size={16} weight="bold" />
                    {label}
                  </Box>
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
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: "red", to: "pink", deg: 45 }}
                  leftSection={<PlayIcon size={18} weight="fill" />}
                >
                  Play Now
                </Button>
                <Button size="md" radius="xl" variant="default">
                  Learn More
                </Button>
              </Flex>
            </Stack>
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
