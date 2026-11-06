import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const rating = style({
  display: "flex",
  gap: vars.space.xs,
});

export const star = style({
  padding: vars.space.xs,
  border: "none",
  borderRadius: vars.radius.sm,
  background: "none",
  color: vars.color.accent,
  fontSize: vars.fontSize.xl,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.background,
  },
});
