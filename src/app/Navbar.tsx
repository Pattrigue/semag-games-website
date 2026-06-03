import { AppShell, Stack } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";

export function Navbar() {
  return (
    <AppShell.Navbar p="md">
      <Stack gap="xs">
        <NavButtons />
      </Stack>
    </AppShell.Navbar>
  );
}
