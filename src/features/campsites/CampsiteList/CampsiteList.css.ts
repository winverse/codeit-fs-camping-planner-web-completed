import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: vars.space.md,
});
