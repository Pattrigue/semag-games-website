import { AppShell, MantineProvider, Stack, Text } from "@mantine/core";
import { Header } from "@/app/Header";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { NavButtons } from "@/app/NavButtons";

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 100 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <Header opened={opened} toggle={toggle} />

        <AppShell.Navbar p="md">
          <Stack gap="xs">
            <NavButtons />
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Text>Content</Text>
        </AppShell.Main>
        <AppShell.Footer>Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
