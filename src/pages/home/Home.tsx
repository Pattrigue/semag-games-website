import { Box, Stack } from "@mantine/core";
import { HeroSection } from "@/pages/home/sections/HeroSection";
import { MakeItYoursSection } from "@/pages/home/sections/MakeItYoursSection";
import { PromoSection } from "@/pages/home/sections/PromoSection";
import { ScreenshotsSection } from "@/pages/home/sections/ScreenshotsSection";

export function Home() {
  return (
    <Stack gap={0}>
      <HeroSection />
      <Box bg="white" h={4} />
      <PromoSection />
      <ScreenshotsSection />
      <MakeItYoursSection />
    </Stack>
  );
}
