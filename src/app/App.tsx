import { AppShell, MantineProvider, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "@/app/Header";
import { Navbar } from "@/app/Navbar";
import { theme } from "@/app/theme";
import { Home } from "@/pages/home/Home";
import "@mantine/core/styles.css";

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
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
        <Navbar />

        <AppShell.Main>
          <Home />
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
