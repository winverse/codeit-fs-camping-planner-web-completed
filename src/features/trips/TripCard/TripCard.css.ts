import { style } from "@vanilla-extract/css";

export const card = style({
  padding: "16px",
  border: "1px solid #d4d4d4",
});

export const name = style({
  fontSize: "18px",
});

export const people = style({
  margin: 0,
});

export const memo = style({
  color: "#525252",
});

export const actions = style({
  display: "flex",
  gap: "8px",
});

export const error = style({
  margin: 0,
  color: "#b91c1c",
  fontSize: "14px",
});
