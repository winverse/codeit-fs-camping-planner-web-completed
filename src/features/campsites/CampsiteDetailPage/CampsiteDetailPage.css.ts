import { style } from "@vanilla-extract/css";
import { desktopMinWidth, vars } from "@/styles/theme.css";

export const layout = style({
  display: "grid",
  alignItems: "start",
  gap: vars.space.lg,
  "@media": {
    [`screen and (min-width: ${desktopMinWidth})`]: {
      gridTemplateColumns: "3fr 2fr",
    },
  },
});

export const content = style({
  display: "grid",
  gap: vars.space.md,
  padding: vars.space.lg,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
});

export const image = style({
  width: "100%",
  aspectRatio: "16 / 9",
  objectFit: "cover",
  borderRadius: vars.radius.sm,
});

export const intro = style({
  color: vars.color.textMuted,
});

export const info = style({
  display: "grid",
  gridTemplateColumns: "80px 1fr",
  gap: `${vars.space.sm} ${vars.space.md}`,
});
