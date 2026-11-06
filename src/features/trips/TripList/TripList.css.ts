import { style } from "@vanilla-extract/css";
import { desktopMinWidth, vars } from "@/styles/theme.css";

export const list = style({
  display: "grid",
  gap: vars.space.md,
  "@media": {
    [`screen and (min-width: ${desktopMinWidth})`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});
