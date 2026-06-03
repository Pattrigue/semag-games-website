import { AppShell, Burger, Group, Image, Text, Title } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";
import logo from "@/assets/logo.png";
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
          <Group>
            <Image src={logo} w={75} h={75} />
            <Title c="white" visibleFrom="sm" order={2}>
              Semag Games
            </Title>
          </Group>
          <Group ml="xl" visibleFrom="sm" gap="xs">
            <NavButtons />
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
