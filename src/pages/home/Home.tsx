import { Box, Stack } from "@mantine/core";
import { HeroSection } from "@/pages/home/sections/HeroSection";
import { PromoSection } from "@/pages/home/sections/PromoSection";

export function Home() {
  return (
    <Stack gap={0}>
      <HeroSection />
      <Box bg="white" h={6} />
      <PromoSection />
    </Stack>
  );
}
