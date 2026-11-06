import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const title = style({
  margin: `0 0 ${vars.space.lg}`,
  color: vars.color.primaryStrong,
  fontSize: vars.fontSize.xxl,
});

export const filter = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.sm,
});

export const filterLink = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: vars.radius.full,
  color: vars.color.primaryStrong,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  textDecoration: "none",
});

export const active = style({
  backgroundColor: vars.color.primary,
  color: vars.color.onPrimary,
});
