import { Container, Text, Title } from "@mantine/core";
import { GamePanel } from "@/components/GamePanel";

export default function About() {
  return (
    <Container size="sm" py={80} h="100vh">
      <GamePanel>
        <Title order={1} ta="center">
          About
        </Title>
        <Text fz={22} ta="center" mt="md">
          This page is under construction — check back soon!
        </Text>
      </GamePanel>
    </Container>
  );
}
