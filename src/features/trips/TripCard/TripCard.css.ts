import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  gap: vars.space.md,
  padding: vars.space.md,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
});

export const image = style({
  flexShrink: 0,
  width: vars.size.thumbnail,
  height: vars.size.thumbnail,
  objectFit: "cover",
  borderRadius: vars.radius.sm,
});

export const noImage = style({
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  width: vars.size.thumbnail,
  height: vars.size.thumbnail,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.border,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.sm,
  minWidth: 0,
});

export const name = style({
  fontSize: vars.fontSize.lg,
});

export const status = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.background,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
});

export const memo = style({
  color: vars.color.textMuted,
});

export const actions = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.sm,
});

export const error = style({
  color: vars.color.danger,
  fontSize: vars.fontSize.sm,
});
