import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Footer } from "@/app/Footer";
import { Header, NAV_ENABLED } from "@/app/Header";
import { Navbar } from "@/app/Navbar";
import { theme } from "@/app/theme";
import { Home } from "@/pages/home/Home";

const HEADER_HEIGHT = 100;

export function App() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <AppShell withBorder={false} header={{ height: HEADER_HEIGHT }}>
        <Header opened={opened} toggle={toggle} />
        {NAV_ENABLED && (
          <Navbar
            opened={opened}
            onClose={close}
            headerHeight={HEADER_HEIGHT}
          />
        )}

        <AppShell.Main>
          <Home />
          <Footer />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
