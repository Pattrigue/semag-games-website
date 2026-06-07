import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@/app/fonts.css";
import "@/app/tokens.css";

import { AppShell, ColorSchemeScript, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import lanapixelWoff2 from "@/assets/fonts/lanapixel.woff2";
import gameplayPoster from "@/assets/gameplay-poster.webp";
import { Footer } from "@/app/Footer";
import { Header, NAV_ENABLED } from "@/app/Header";
import { Navbar } from "@/app/Navbar";
import { theme } from "@/app/theme";

const HEADER_HEIGHT = 100;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>Semag Games | Vibrant Venture</title>
        <meta
          name="description"
          content="Vibrant Venture is a colorful 2D adventure platformer. Swap between four quirky heroes and combine their unique abilities to chase down the dastardly Violastro. Out now on Steam!"
        />

        {/* The hero video poster is the LCP element — fetch it alongside the
            document instead of waiting for the <video poster> to be parsed.
            The font is otherwise discovered late, behind fonts.css. */}
        <link rel="preload" as="image" href={gameplayPoster} />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={lanapixelWoff2}
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#271d4a" />

        {/* OpenGraph (Discord, Facebook, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Semag Games" />
        <meta property="og:title" content="Semag Games | Vibrant Venture" />
        <meta
          property="og:description"
          content="A colorful 2D adventure platformer. Swap between four quirky heroes and combine their unique abilities to chase down the dastardly Violastro. Out now on Steam!"
        />
        <meta property="og:url" content="https://semag-games.com/" />
        <meta
          property="og:image"
          content="https://semag-games.com/vibrant-venture-social-card.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="The Vibrant Venture logo and cast, with the villain Violastro looming behind them"
        />

        {/* Twitter / X (falls back to the og:* tags for everything else) */}
        <meta name="twitter:card" content="summary_large_image" />

        <ColorSchemeScript forceColorScheme="light" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
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
          <Outlet />
          <Footer />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
