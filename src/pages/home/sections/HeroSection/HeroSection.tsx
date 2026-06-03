import { Box, Button, Group, Image, Stack, Text } from "@mantine/core";
import { DiscordLogoIcon, SteamLogoIcon } from "@phosphor-icons/react";
import gameplayMp4 from "@/assets/gameplay.mp4";
import gameplayWebm from "@/assets/gameplay.webm";
import vvLogo from "@/assets/vv-logo.webp";
import classes from "./HeroSection.module.css";

const STEAM_URL = "https://store.steampowered.com/app/1264520/Vibrant_Venture/";
const DISCORD_URL = "https://discord.gg/SSUTPCU";

export function HeroSection() {
  return (
    <Box
      component="section"
      className={classes.root}
      h={{ base: 600, md: 720 }}
    >
      <video autoPlay muted loop playsInline className={classes.video}>
        {/* webm first (small, modern); mp4 fallback for older Safari/iOS. */}
        <source src={gameplayWebm} type="video/webm" />
        <source src={gameplayMp4} type="video/mp4" />
      </video>

      <Box className={classes.scrim} />

      <Stack
        className={classes.content}
        h="100%"
        justify="space-between"
        align="center"
        gap="xl"
        px="md"
        pt={{ base: 12, md: 24 }}
        pb={{ base: 40, md: 64 }}
      >
        {/* Branding anchored to the top. */}
        <Stack align="center" gap="md">
          <Box component="h1" className={classes.heading}>
            <Image
              src={vvLogo}
              alt="Vibrant Venture"
              className={classes.logo}
              w="auto"
              fit="contain"
              maw={{ base: 300, sm: 460 }}
            />
          </Box>

          <Text
            className={classes.tagline}
            c="white"
            ta="center"
            fz={{ base: "lg", sm: "xl" }}
            fw={500}
            maw={600}
          >
            A vibrant platforming adventure with a quirky cast of characters.
          </Text>
        </Stack>

        {/* CTAs anchored to the bottom, letting the gameplay own the middle. */}
        <Group gap="md" justify="center">
          <Button
            component="a"
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cta}
            size="lg"
            radius="md"
            variant="gradient"
            gradient={{ from: "red", to: "pink", deg: 45 }}
            leftSection={<SteamLogoIcon size={22} weight="fill" />}
          >
            Play on Steam
          </Button>
          <Button
            component="a"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            radius="md"
            variant="white"
            color="dark"
            leftSection={<DiscordLogoIcon size={22} weight="fill" />}
          >
            Join Discord
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
