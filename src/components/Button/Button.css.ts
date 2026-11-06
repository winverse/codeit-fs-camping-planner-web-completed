import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid #166534",
    fontSize: "14px",
    cursor: "pointer",
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: { backgroundColor: "#166534", color: "#ffffff" },
      secondary: { backgroundColor: "#ffffff", color: "#166534" },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
