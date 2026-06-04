import { Box, type BoxProps } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./GamePanel.module.css";

interface GamePanelProps extends BoxProps {
  children: ReactNode;
  className?: string;
}

export function GamePanel({ children, className, ...props }: GamePanelProps) {
  return (
    <Box
      className={className ? `${classes.panel} ${className}` : classes.panel}
      {...props}
    >
      {children}
    </Box>
  );
}
