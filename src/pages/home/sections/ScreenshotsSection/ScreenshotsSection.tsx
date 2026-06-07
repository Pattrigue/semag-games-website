import { Carousel } from "@mantine/carousel";
import { AspectRatio, Box, Image, Stack } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import ribbonScreenshots from "@/assets/ribbon-screenshots-3x.png";
import { RibbonHeading } from "@/components/RibbonHeading";
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
      pb={{ base: 56, md: 80 }}
    >
      <Box className={classes.backdrop} />
      <Stack gap="xl" className={classes.inner}>
        <RibbonHeading src={ribbonScreenshots} alt="Screenshots" />

        <Carousel
          classNames={{ root: classes.carousel }}
          slideSize={{ base: "80%", sm: "48%", md: "33%" }}
          slideGap="md"
          withControls={false}
          emblaOptions={{ loop: true, align: "start" }}
          plugins={[autoScroll.current]}
        >
          {SCREENSHOTS.map((src, i) => (
            <Carousel.Slide key={src}>
              <Box className={classes.slideInner}>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={src}
                    alt={`Vibrant Venture screenshot ${i + 1}`}
                    loading="lazy"
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
