import { Carousel } from "@mantine/carousel";
import { AspectRatio, Box, Image, Stack } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import ribbonScreenshots from "@/assets/ribbon-screenshots-2x.png";
import { SCREENSHOTS } from "@/pages/home/sections/ScreenshotsSection/screenshots";
import classes from "./ScreenshotsSection.module.css";

export function ScreenshotsSection() {
  const prefersReducedMotion = useReducedMotion(false, {
    getInitialValueInEffect: false,
  });

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
      pt={{ base: 28, md: 36 }}
      pb={{ base: 56, md: 80 }}
    >
      <Stack gap="xl" className={classes.inner}>
        <Box component="h2" className={classes.ribbonHeading}>
          <img
            src={ribbonScreenshots}
            alt="Screenshots"
            className={classes.ribbon}
          />
        </Box>

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
