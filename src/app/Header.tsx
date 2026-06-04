import { AppShell, Burger, Group, Image } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";
import logo from "@/assets/logo.webp";
import semagGamesTypography from "@/assets/semag-games-typography.webp";
import classes from "./Header.module.css";

// Nav is hidden until the pages it links to (Blog, Contacts) exist — shipping
// dead buttons on the first deploy would feel broken. Flip to true to bring
// back the burger, drawer, and header buttons.
export const NAV_ENABLED = false;

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header className={classes.root}>
      <Group h="100%" px="md">
        {NAV_ENABLED && (
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="lg"
            color="white"
            lineSize={3}
          />
        )}
        <Group justify="space-between" style={{ flex: 1 }}>
          <Group ml={NAV_ENABLED ? { base: "auto", sm: 0 } : 0}>
            <Image src={logo} w={75} h={75} />
            <Image
              src={semagGamesTypography}
              alt="Semag Games"
              w="auto"
              h={{ base: 24, sm: 32 }}
              fit="contain"
            />
          </Group>
          {NAV_ENABLED && (
            <Group ml="xl" visibleFrom="sm" gap="xs">
              <NavButtons />
            </Group>
          )}
        </Group>
      </Group>
    </AppShell.Header>
  );
}
