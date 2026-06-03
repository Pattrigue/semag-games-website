import { Box } from "@mantine/core";
import type { Icon } from "@phosphor-icons/react";
import classes from "./FeaturePill.module.css";

interface FeaturePillProps {
  icon: Icon;
  label: string;
}

/** Frosted pill showing a single feature with a leading icon. */
export function FeaturePill({ icon: FeatureIcon, label }: FeaturePillProps) {
  return (
    <Box className={classes.pill}>
      <FeatureIcon size={16} weight="bold" />
      {label}
    </Box>
  );
}
