import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@/app/fonts.css";
import "@/app/tokens.css";

import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppRoutes } from "@/app/AppRoutes";
import { Footer } from "@/app/Footer";
import { Header, NAV_ENABLED } from "@/app/Header";
import { Navbar } from "@/app/Navbar";
import { theme } from "@/app/theme";

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
          <AppRoutes />
          <Footer />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
