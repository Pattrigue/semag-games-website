import { Text, type TextProps } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./Eyebrow.module.css";

interface EyebrowProps extends TextProps {
  children: ReactNode;
}

/** Small uppercase, letter-spaced label that sits above a section title. */
export function Eyebrow({ children, ...props }: EyebrowProps) {
  return (
    <Text
      fz="sm"
      fw={700}
      tt="uppercase"
      className={classes.eyebrow}
      {...props}
    >
      {children}
    </Text>
  );
}
