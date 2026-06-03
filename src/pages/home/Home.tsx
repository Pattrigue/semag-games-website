import { Box, Stack } from "@mantine/core";
import { HeroSection } from "@/pages/home/sections/HeroSection/HeroSection";
import { MakeItYoursSection } from "@/pages/home/sections/MakeItYoursSection/MakeItYoursSection";
import { PromoSection } from "@/pages/home/sections/PromoSection/PromoSection";
import { ScreenshotsSection } from "@/pages/home/sections/ScreenshotsSection/ScreenshotsSection";

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
