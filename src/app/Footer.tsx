import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  ButterflyIcon,
  DiscordLogoIcon,
  type Icon,
  InstagramLogoIcon,
  SteamLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import logo from "@/assets/logo.png";
import violastroBwehehe from "@/assets/violastro-bwehehe.ogg";
import violastro from "@/assets/violastro.webp";
import classes from "./Footer.module.css";

interface Social {
  label: string;
  href: string;
  icon: Icon;
}

const SOCIALS: Social[] = [
  { label: "Discord", href: "https://discord.gg/SSUTPCU", icon: DiscordLogoIcon },
  { label: "YouTube", href: "https://www.youtube.com/c/semaggames", icon: YoutubeLogoIcon },
  {
    label: "Steam",
    href: "https://store.steampowered.com/app/1264520/Vibrant_Venture/",
    icon: SteamLogoIcon,
  },
  { label: "X", href: "https://x.com/Pattrigue", icon: XLogoIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@playvibrantventure", icon: TiktokLogoIcon },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/vibrant-venture.bsky.social",
    icon: ButterflyIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/playvibrantventure",
    icon: InstagramLogoIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  // Click Violastro for his signature "bwehehe" and a wiggle.
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [wiggling, setWiggling] = useState(false);

  const handleViolastroClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(violastroBwehehe);
    }
    audioRef.current.currentTime = 0;
    void audioRef.current.play();
    setWiggling(true);
  };

  return (
    <Box component="footer" className={classes.root}>
      {/* Violastro, the purple villain, peeking up from behind the footer's top
          edge; pops up on hover, cackles + wiggles on click. */}
      <div
        aria-hidden
        className={classes.violastro}
        onClick={handleViolastroClick}
      >
        <img
          src={violastro}
          alt=""
          className={`${classes.violastroImg}${wiggling ? ` ${classes.wiggle}` : ""}`}
          onAnimationEnd={() => setWiggling(false)}
        />
      </div>

      <Container size="xl" py={{ base: 40, sm: 48 }} className={classes.content}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap="xl"
        >
          <Group gap="md" wrap="nowrap">
            <Image src={logo} w={56} h={56} alt="" />
            <Box>
              <Text c="white" fw={800} fz="lg" lh={1.2}>
                Semag Games
              </Text>
              <Text c="dimmed" fz="sm">
                Makers of Vibrant Venture
              </Text>
            </Box>
          </Group>

          <Group gap="xs">
            {SOCIALS.map(({ label, href, icon: SocialIcon }) => (
              <Tooltip key={label} label={label} withArrow>
                <ActionIcon
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variant="transparent"
                  size="lg"
                  className={classes.social}
                >
                  <SocialIcon size={24} weight="fill" />
                </ActionIcon>
              </Tooltip>
            ))}
          </Group>
        </Flex>

        <Divider className={classes.divider} my="lg" />

        <Text c="dimmed" fz="sm" ta="center">
          © {year} Semag Games. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
