import "@mantine/core/styles.css";

import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "@/app/Header";
import { Navbar } from "@/app/Navbar";
import { theme } from "@/app/theme";
import { Home } from "@/pages/home/Home";

const HEADER_HEIGHT = 100;

export function App() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell withBorder={false} header={{ height: HEADER_HEIGHT }}>
        <Header opened={opened} toggle={toggle} />
        <Navbar opened={opened} onClose={close} headerHeight={HEADER_HEIGHT} />

        <AppShell.Main>
          <Home />
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
