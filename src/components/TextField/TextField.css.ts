import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
});

export const input = style({
  minHeight: vars.size.control,
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: `1px solid ${vars.color.borderStrong}`,
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.md,
  fontWeight: 400,
});
