import { Group, UnstyledButton, type UnstyledButtonProps } from "@mantine/core";
import {
  ArticleIcon,
  EnvelopeIcon,
  HouseIcon,
  type Icon,
} from "@phosphor-icons/react";
import classes from "./NavButtons.module.css";

export function NavButtons() {
  return (
    <>
      <NavButton icon={HouseIcon}>Home</NavButton>
      <NavButton icon={ArticleIcon}>Blog</NavButton>
      <NavButton icon={EnvelopeIcon}>Contacts</NavButton>
    </>
  );
}

interface NavButtonProps extends UnstyledButtonProps {
  icon: Icon;
  children: React.ReactNode;
}

function NavButton({
  children,
  icon: IconComponent,
  ...props
}: NavButtonProps) {
  return (
    <UnstyledButton className={classes.button} {...props}>
      <Group gap="xs">
        <IconComponent size={24} weight="bold" />
        {children}
      </Group>
    </UnstyledButton>
  );
}
