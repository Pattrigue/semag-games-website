import "@mantine/core/styles.css";
import { AppShell, MantineProvider, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "@/app/Header";
import { NavButtons } from "@/app/NavButtons";
import { Home } from "@/pages/home/Home";

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        withBorder={false}
        header={{ height: 100 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <Header opened={opened} toggle={toggle} />

        <AppShell.Navbar p="md">
          <Stack gap="xs">
            <NavButtons />
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Home />
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
