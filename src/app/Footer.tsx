import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  ButterflyIcon,
  DiscordLogoIcon,
  EnvelopeIcon,
  type Icon,
  InstagramLogoIcon,
  SteamLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import logo from "@/assets/semag-logo-pixelated.png";
import violastro from "@/assets/violastro.webp";
import violastroBwehehe from "@/assets/violastro-bwehehe.ogg";
import {
  BLUESKY_URL,
  CONTACT_EMAIL_URL,
  DISCORD_URL,
  INSTAGRAM_URL,
  STEAM_URL,
  TIKTOK_URL,
  X_URL,
  YOUTUBE_URL,
} from "@/utils/urls";
import classes from "./Footer.module.css";

interface Social {
  label: string;
  href: string;
  icon: Icon;
}

const SOCIALS: Social[] = [
  { label: "Discord", href: DISCORD_URL, icon: DiscordLogoIcon },
  { label: "YouTube", href: YOUTUBE_URL, icon: YoutubeLogoIcon },
  {
    label: "Steam",
    href: STEAM_URL,
    icon: SteamLogoIcon,
  },
  { label: "X", href: X_URL, icon: XLogoIcon },
  {
    label: "TikTok",
    href: TIKTOK_URL,
    icon: TiktokLogoIcon,
  },
  {
    label: "Bluesky",
    href: BLUESKY_URL,
    icon: ButterflyIcon,
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: InstagramLogoIcon,
  },
  {
    label: "Email",
    href: CONTACT_EMAIL_URL,
    icon: EnvelopeIcon,
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

      <Container
        size="xl"
        py={{ base: 24, sm: 28 }}
        className={classes.content}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap="xl"
        >
          <Group gap="md" wrap="nowrap">
            <Image src={logo} w={68} h={68} alt="" className={classes.logo} />
            <Box ta={{ base: "center", sm: "left" }}>
              <Text c="white" fz={22} lh={1.2}>
                © {year} Semag Games
              </Text>
              <Text c="white" fz={22} lh={1.2}>
                Made with{" "}
                <Text component="span" fz={22} c="red.6">
                  ♥
                </Text>{" "}
                by Pattrigue
              </Text>
            </Box>
          </Group>

          <Group gap="xs">
            {SOCIALS.map(({ label, href, icon: SocialIcon }) => (
              <Tooltip key={label} label={label} withArrow>
                <ActionIcon
                  component="a"
                  href={href}
                  // mailto: opens the mail client in-place; a new tab would
                  // just be a blank page in some browsers.
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
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
      </Container>
    </Box>
  );
}
