import { Carousel } from "@mantine/carousel";
import { AspectRatio, Box, Image, Stack } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SCREENSHOTS } from "@/pages/home/sections/ScreenshotsSection/screenshots";
import classes from "./ScreenshotsSection.module.css";

export function ScreenshotsSection() {
  const prefersReducedMotion = useReducedMotion(false, {
    getInitialValueInEffect: false,
  });

  // Continuous, constant-speed drift (marquee-style); pauses on hover and
  // resumes after manual drags. Held still for reduced-motion users.
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: !prefersReducedMotion,
    }),
  );

  return (
    <Box
      component="section"
      className={classes.section}
      py={{ base: 56, md: 80 }}
    >
      <Stack gap="xl" className={classes.inner}>
        <SectionHeading
          eyebrow="Screenshots"
          eyebrowColor="pink.4"
          title="Sights From the Adventure"
          titleColor="white"
        />

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
              <Box className={classes.slideInner}>
                {/* All captures are 16:9 — lock the ratio so nothing crops. */}
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={src}
                    alt={`Vibrant Venture screenshot ${i + 1}`}
                  />
                </AspectRatio>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Box>
  );
}
