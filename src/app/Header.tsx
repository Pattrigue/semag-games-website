import { AppShell, Burger, Group, Image } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";
import logo from "@/assets/logo.webp";
import semagGamesTypography from "@/assets/semag-games-typography.webp";
import classes from "./Header.module.css";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header className={classes.root}>
      <Group h="100%" px="md">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="lg"
          color="white"
          lineSize={3}
        />
        <Group justify="space-between" style={{ flex: 1 }}>
          <Group ml={{ base: "auto", sm: 0 }}>
            <Image src={logo} w={75} h={75} />
            <Image
              src={semagGamesTypography}
              alt="Semag Games"
              visibleFrom="sm"
              w="auto"
              h={32}
              fit="contain"
            />
          </Group>
          <Group ml="xl" visibleFrom="sm" gap="xs">
            <NavButtons />
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
