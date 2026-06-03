import { Box, Stack, Text, Title } from "@mantine/core";
import gameplayVideo from "@/assets/gameplay.mp4";

export function HeroSection() {
  return (
    <Box pos="relative" h={700} style={{ overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={gameplayVideo} type="video/mp4" />
      </video>

      {/* dark overlay so text stays readable */}
      <Box
        pos="absolute"
        inset={0}
        style={{ background: "rgba(0,0,0,0.4)", zIndex: 1 }}
      />

      {/* content that sits on top */}
      <Stack
        pos="relative"
        justify="center"
        align="center"
        h="100%"
        style={{ zIndex: 2 }}
      >
        <Title c="white">Vibrant Venture</Title>
        <Text c="white">An Epic Game</Text>
      </Stack>
    </Box>
  );
}
