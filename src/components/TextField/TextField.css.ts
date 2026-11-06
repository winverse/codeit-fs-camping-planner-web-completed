import { style } from "@vanilla-extract/css";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const input = style({
  padding: "6px 8px",
  border: "1px solid #d4d4d4",
  borderRadius: "6px",
  fontSize: "14px",
});
