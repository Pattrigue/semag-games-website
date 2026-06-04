import {
  AspectRatio,
  Badge,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  CaretDoubleRightIcon,
  CheckCircleIcon,
  SteamLogoIcon,
} from "@phosphor-icons/react";
import type { CSSProperties } from "react";
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
  const accentVar = `var(--mantine-color-${accent}-5)`;

  return (
    <Flex
      direction={{ base: "column", md: reversed ? "row-reverse" : "row" }}
      align="center"
      gap={{ base: 32, md: 64 }}
    >
      <AspectRatio
        ratio={16 / 9}
        flex={1.6}
        w="100%"
        miw={0}
        className={classes.imageWrap}
        style={{ "--accent": accentVar } as CSSProperties}
      >
        <Image src={image} alt={tag} radius="lg" className={classes.image} />
      </AspectRatio>

      <Stack flex={1} miw={0} gap="md" align="flex-start">
        <Badge
          color={accent}
          variant="light"
          size="lg"
          radius="sm"
          leftSection={<FeatureIcon size={14} weight="bold" />}
        >
          {tag}
        </Badge>

        <Title order={3} fz={{ base: 26, sm: 34 }} fw={800} lh={1.15}>
          {title}
        </Title>

        <Text fz={{ base: "md", sm: "lg" }}>{description}</Text>

        <Stack gap="xs" mt={4}>
          {bullets.map((bullet) => (
            <Group key={bullet} gap="sm" wrap="nowrap" align="center">
              <CheckCircleIcon size={20} weight="fill" color={accentVar} />
              <Text fw={500}>{bullet}</Text>
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
          rightSection={<CaretDoubleRightIcon size={16} weight="bold" />}
        >
          {cta}
        </Button>
      </Stack>
    </Flex>
  );
}
