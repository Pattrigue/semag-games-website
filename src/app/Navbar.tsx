import { Drawer, Stack } from "@mantine/core";
import { NavButtons } from "@/app/NavButtons";
import classes from "./Navbar.module.css";

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
      classNames={{ content: classes.content }}
      styles={{
        inner: { top: headerHeight },
        content: { height: "auto" },
      }}
    >
      <Stack gap="xs">
        <NavButtons variant="navbar" />
      </Stack>
    </Drawer>
  );
}
