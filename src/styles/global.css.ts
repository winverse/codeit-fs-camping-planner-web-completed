import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  lineHeight: 1.6,
});

globalStyle("h1, h2, h3, p, dl", {
  margin: 0,
});

globalStyle("a", {
  color: "inherit",
});

globalStyle("button, input, textarea", {
  font: "inherit",
});

globalStyle("dt", {
  color: vars.color.textMuted,
});

globalStyle("dd", {
  margin: 0,
});

globalStyle(":focus-visible", {
  outline: `2px solid ${vars.color.primary}`,
  outlineOffset: "2px",
});
