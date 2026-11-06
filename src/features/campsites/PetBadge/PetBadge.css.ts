import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const badge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.primarySoft,
  color: vars.color.primaryStrong,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
});
