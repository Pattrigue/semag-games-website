import { Drawer, Stack } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";

interface NavbarProps {
  headerHeight: number;
  opened: boolean;
  onClose: () => void;
}

export function Navbar({ headerHeight, opened, onClose }: NavbarProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="top"
      size="auto"
      withCloseButton={false}
      hiddenFrom="sm"
      zIndex={10}
      styles={{
        inner: { top: headerHeight },
        content: { backgroundColor: "#1a1a1a", height: "auto" },
      }}
    >
      <Stack gap="xs">
        <NavButtons />
      </Stack>
    </Drawer>
  );
}
