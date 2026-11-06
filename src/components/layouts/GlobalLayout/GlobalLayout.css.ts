import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  backgroundColor: vars.color.surface,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const headerInner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: vars.size.content,
  margin: "0 auto",
  padding: vars.space.md,
});

export const logo = style({
  color: vars.color.primaryStrong,
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
  textDecoration: "none",
});

export const navLink = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.full,
  color: vars.color.primaryStrong,
  fontWeight: 600,
  textDecoration: "none",
  ":hover": {
    backgroundColor: vars.color.primarySoft,
  },
});

export const main = style({
  maxWidth: vars.size.content,
  margin: "0 auto",
  padding: `${vars.space.lg} ${vars.space.md} ${vars.space.xl}`,
});

export const footer = style({
  padding: vars.space.lg,
  borderTop: `1px solid ${vars.color.border}`,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
  textAlign: "center",
});
