import { AppShell, Stack } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";

export function Navbar() {
  return (
    <AppShell.Navbar p="md" h="auto" bg="#1a1a1a">
      <Stack gap="xs">
        <NavButtons />
      </Stack>
    </AppShell.Navbar>
  );
}
