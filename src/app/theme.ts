import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import { Badge, Button, createTheme } from "@mantine/core";
import badgeClasses from "./Badge.module.css";
import buttonClasses from "./Button.module.css";

export const theme = createTheme({
  fontFamily: "Nunito, sans-serif",
  headings: { fontFamily: "Nunito, sans-serif" },
  components: {
    Badge: Badge.extend({
      classNames: {
        root: badgeClasses.root,
        label: badgeClasses.label,
        section: badgeClasses.section,
      },
    }),
    Button: Button.extend({
      classNames: {
        root: buttonClasses.root,
        label: buttonClasses.label,
        section: buttonClasses.section,
      },
    }),
  },
});
