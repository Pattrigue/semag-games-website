import { Button, type ButtonProps } from "@mantine/core";
import {
  ArticleIcon,
  EnvelopeIcon,
  HeadsetIcon,
  HouseIcon,
  type Icon,
} from "@phosphor-icons/react";

export function NavButtons() {
  return (
    <>
      <NavButton icon={HouseIcon}>Home</NavButton>
      <NavButton icon={ArticleIcon}>Blog</NavButton>
      <NavButton icon={EnvelopeIcon}>Contacts</NavButton>
      <NavButton icon={HeadsetIcon}>Support</NavButton>
    </>
  );
}
interface NavButtonProps extends ButtonProps {
  icon: Icon;
  children: React.ReactNode;
}

function NavButton({
  children,
  icon: IconComponent,
  ...props
}: NavButtonProps) {
  return (
    <Button
      variant="light"
      size="lg"
      leftSection={<IconComponent size={24} />}
      styles={{ inner: { justifyContent: "flex-start" } }}
      {...props}
    >
      {children}
    </Button>
  );
}
