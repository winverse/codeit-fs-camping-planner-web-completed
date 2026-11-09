import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const notice = style({
  margin: `0 ${vars.space.stackM}`,
  padding: `${vars.space.stackM} ${vars.space.blockPad}`,
  borderRadius: vars.radius.m,
  backgroundColor: vars.color.brandTint,
  color: vars.color.brandTintText,
  fontSize: vars.fontSize.sub,
  fontWeight: vars.fontWeight.semibold,
});
