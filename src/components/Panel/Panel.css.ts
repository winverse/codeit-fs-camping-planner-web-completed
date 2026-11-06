import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const panel = style({
  display: "grid",
  gap: vars.space.md,
});

export const title = style({
  fontSize: vars.fontSize.xl,
});
