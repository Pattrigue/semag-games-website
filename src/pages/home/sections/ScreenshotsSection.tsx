import { useRef } from "react";
import { Box, Image, Stack, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import classes from "./ScreenshotsSection.module.css";

// Placeholder screenshots — swap for real game captures later.
const SCREENSHOTS = Array.from(
  { length: 10 },
  (_, i) =>
    `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${i + 1}.png`,
);

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ScreenshotsSection() {
  // Continuous, constant-speed drift (marquee-style); pauses on hover and
  // resumes after manual drags. Held still for reduced-motion users.
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: !prefersReducedMotion,
    }),
  );

  return (
    <Box component="section" className={classes.section} py={{ base: 56, md: 80 }}>
      <Stack gap="xl" className={classes.inner}>
        <Stack gap={4} align="center">
          <Text
            fz="sm"
            fw={700}
            tt="uppercase"
            c="pink.4"
            className={classes.eyebrow}
          >
            Screenshots
          </Text>
          <Title order={2} ta="center" fz={{ base: 28, sm: 36 }} fw={800} c="white">
            See It in Action
          </Title>
        </Stack>

        {/* Full-bleed: no Container, so the strip spans the whole viewport. */}
        <Carousel
          classNames={{ root: classes.carousel }}
          slideSize={{ base: "80%", sm: "48%", md: "33%" }}
          slideGap="md"
          withControls={false}
          emblaOptions={{ loop: true }}
          plugins={[autoScroll.current]}
        >
          {SCREENSHOTS.map((src, i) => (
            <Carousel.Slide key={src}>
              <Image
                src={src}
                alt={`Vibrant Venture screenshot ${i + 1}`}
                radius="md"
                h={{ base: 200, sm: 320 }}
                fit="cover"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Box>
  );
}
