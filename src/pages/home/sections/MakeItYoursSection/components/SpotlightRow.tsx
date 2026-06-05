import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CaretDoubleRightIcon, SteamLogoIcon } from "@phosphor-icons/react";
import { GamePanel } from "@/components/GamePanel";
import type { Spotlight } from "@/pages/home/sections/MakeItYoursSection/types/spotlight";
import classes from "./SpotlightRow.module.css";

interface SpotlightRowProps {
  data: Spotlight;
  reversed: boolean;
}

export function SpotlightRow({ data, reversed }: SpotlightRowProps) {
  const {
    icon: FeatureIcon,
    tag,
    title,
    description,
    bullets,
    image,
    accent,
    cta,
    href,
  } = data;

  return (
    <Flex
      direction={{ base: "column", md: reversed ? "row-reverse" : "row" }}
      align="center"
      gap={{ base: 32, md: 64 }}
    >
      <Box flex={1.6} w="100%" miw={0} className={classes.imageBlock}>
        <AspectRatio ratio={16 / 9} className={classes.imageWrap}>
          <Image src={image} alt={tag} />
        </AspectRatio>
        <Badge
          variant="filled"
          color={accent}
          radius="xl"
          leftSection={<FeatureIcon size={20} weight="fill" />}
          className={classes.imageBadge}
        >
          {tag}
        </Badge>
      </Box>

      <GamePanel flex={1} miw={0}>
        <Stack gap="md" align="flex-start">
          <Title order={3} fz={33} fw={400} lh={1.15} className={classes.title}>
            {title}
          </Title>

          <Text fz={22} lh={1.4}>
            {description}
          </Text>

          <Stack gap="xs" mt={4}>
            {bullets.map((bullet) => (
              <Group key={bullet} gap="sm" wrap="nowrap" align="center">
                <Text component="span" fz={22} style={{ color: accent }}>
                  •
                </Text>
                <Text fz={22}>{bullet}</Text>
              </Group>
            ))}
          </Stack>

          <Button
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size="md"
            mt="sm"
            leftSection={<SteamLogoIcon size={20} weight="fill" />}
            rightSection={<CaretDoubleRightIcon size={18} weight="fill" />}
          >
            {cta}
          </Button>
        </Stack>
      </GamePanel>
    </Flex>
  );
}
