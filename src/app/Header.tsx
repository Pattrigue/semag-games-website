import { AppShell, Burger, Group, Image } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";
import logo from "@/assets/logo.png";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="lg" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <Image src={logo} w={75} h={75} />
          <Group ml="xl" visibleFrom="sm">
            <NavButtons />
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
