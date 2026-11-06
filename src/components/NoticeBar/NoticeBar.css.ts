import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const notice = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.primarySoft,
  color: vars.color.primaryStrong,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  textAlign: "center",
});
