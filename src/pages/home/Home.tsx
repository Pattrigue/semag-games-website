import { Box, Stack } from "@mantine/core";
import { HeroSection } from "@/pages/home/sections/HeroSection";

export function Home() {
  return (
    <Stack gap={0}>
      <HeroSection />
      <Box bg="red" w="100%" h={5} />
      <Box p="md">
        Some other section describing how awesome and cool and based we are
      </Box>
    </Stack>
  );
}
