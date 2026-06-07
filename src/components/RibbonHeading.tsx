import { Box, type BoxProps } from "@mantine/core";
import classes from "./RibbonHeading.module.css";

interface RibbonHeadingProps extends BoxProps {
  src: string;
  alt: string;
}

export function RibbonHeading({ src, alt, ...props }: RibbonHeadingProps) {
  return (
    <Box component="h2" className={classes.heading} {...props}>
      <img src={src} alt={alt} loading="lazy" className={classes.ribbon} />
    </Box>
  );
}
