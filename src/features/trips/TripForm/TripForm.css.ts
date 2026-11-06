import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
  border: "1px solid #d4d4d4",
  borderRadius: "8px",
});

export const title = style({
  margin: 0,
  fontSize: "18px",
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const preview = style({
  margin: 0,
  color: "#525252",
});

export const error = style({
  margin: 0,
  color: "#b91c1c",
  fontSize: "14px",
});
