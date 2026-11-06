import { style } from "@vanilla-extract/css";

export const rating = style({
  display: "flex",
  gap: "2px",
});

export const star = style({
  padding: 0,
  border: "none",
  background: "none",
  color: "#ca8a04",
  fontSize: "22px",
  cursor: "pointer",
});
