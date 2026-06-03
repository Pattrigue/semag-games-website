import { Group, UnstyledButton, type UnstyledButtonProps } from "@mantine/core";
import {
  ArticleIcon,
  EnvelopeIcon,
  HouseIcon,
  type Icon,
} from "@phosphor-icons/react";
import classes from "./NavButtons.module.css";

interface NavButtonsProps {
  variant?: "header" | "navbar";
}

export function NavButtons({ variant = "header" }: NavButtonsProps) {
  return (
    <>
      <NavButton icon={HouseIcon} data-variant={variant}>
        Home
      </NavButton>
      <NavButton icon={ArticleIcon} data-variant={variant}>
        Blog
      </NavButton>
      <NavButton icon={EnvelopeIcon} data-variant={variant}>
        Contacts
      </NavButton>
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
