import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import sunburstBg from "@/assets/sunburt-bg.webp";
import vibrantVentureCharacters from "@/assets/vibrant-venture-characters.webp";
import classes from "./PromoSection.module.css";

export function PromoSection() {
  return (
    <Box className={classes.section}>
      <BackgroundImage src={sunburstBg} className={classes.sunburst} />

      <Container size="lg" py={{ base: 48, md: 80 }}>
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 40, md: 100 }}
        >
          <Card
            flex={1}
            w="100%"
            radius="lg"
            padding="xl"
            withBorder
            shadow="sm"
          >
            <Stack gap="md" align="flex-start">
              <Badge color="red" variant="light" size="lg" radius="sm">
                Out Now
              </Badge>

              <Title order={2} fz={{ base: 28, sm: 36 }} fw={800} lh={1.1}>
                Vibrant Venture
              </Title>

              <Text c="dimmed" fz={{ base: "md", sm: "lg" }}>
                A colorful platformer packed with vibrant worlds, quirky
                characters, and tight, satisfying gameplay. Dive in and play the
                fucking game.
              </Text>

              <Group gap="md" mt="sm">
                <Button size="md" radius="xl" color="red">
                  Play Now
                </Button>
                <Button size="md" radius="xl" variant="default">
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Card>

          <Image
            src={vibrantVentureCharacters}
            className={classes.characters}
            w="auto"
            fit="contain"
            flex={1}
            maw={{ base: 280, md: "50%" }}
          />
        </Flex>
      </Container>
    </Box>
  );
}
