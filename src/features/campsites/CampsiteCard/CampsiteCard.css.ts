import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
});

export const image = style({
  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "cover",
});

export const noImage = style({
  display: "grid",
  placeItems: "center",
  aspectRatio: "4 / 3",
  backgroundColor: vars.color.border,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.xs,
  padding: vars.space.md,
});

export const name = style({
  fontSize: vars.fontSize.lg,
});

export const link = style({
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const region = style({
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
});

export const industries = style({
  fontSize: vars.fontSize.sm,
});
