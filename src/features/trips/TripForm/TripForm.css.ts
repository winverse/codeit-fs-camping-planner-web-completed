import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  padding: vars.space.lg,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
});

export const title = style({
  fontSize: vars.fontSize.lg,
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
});

export const textarea = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: `1px solid ${vars.color.borderStrong}`,
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.md,
  fontWeight: 400,
  resize: "vertical",
});

export const preview = style({
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
});

export const error = style({
  color: vars.color.danger,
  fontSize: vars.fontSize.sm,
});
