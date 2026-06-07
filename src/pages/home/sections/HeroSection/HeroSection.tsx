import { Box, Button, Group, Image, Stack } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import { DiscordLogoIcon, SteamLogoIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import gameplayMp4 from "@/assets/gameplay.mp4";
import gameplayWebm from "@/assets/gameplay.webm";
import gameplayPoster from "@/assets/gameplay-poster.webp";
import vvLogo from "@/assets/vv-logo.webp";
import { DISCORD_URL, STEAM_URL } from "@/utils/urls";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Defer the heavy gameplay video until the page has fully loaded so it
  // never competes with critical assets. The poster is the video's first
  // frame, so playback taking over is invisible.
  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Reduced-motion users keep the still poster and skip the download.
  const showVideo = pageLoaded && !prefersReducedMotion;

  useEffect(() => {
    if (showVideo) {
      // <source> children added after mount aren't picked up automatically.
      videoRef.current?.load();
    }
  }, [showVideo]);

  return (
    <Box
      component="section"
      className={classes.root}
      h={{ base: 600, md: 720 }}
    >
      {/* poster = the video's own first frame: it paints immediately (and is
          what LCP measures) while the heavy video streams in behind it. */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={gameplayPoster}
        className={classes.video}
      >
        {showVideo && (
          <>
            {/* webm first (small, modern); mp4 fallback for older Safari/iOS. */}
            <source src={gameplayWebm} type="video/webm" />
            <source src={gameplayMp4} type="video/mp4" />
          </>
        )}
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
        </Stack>

        <Group gap="md" justify="center">
          <Button
            component="a"
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            variant="filled"
            leftSection={<SteamLogoIcon size={30} weight="fill" />}
          >
            Play on Steam
          </Button>
          <Button
            component="a"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            variant="default"
            leftSection={<DiscordLogoIcon size={30} weight="fill" />}
          >
            Join Discord
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
