import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const button = recipe({
  base: {
    minHeight: vars.size.control,
    padding: `${vars.space.sm} ${vars.space.md}`,
    borderRadius: vars.radius.sm,
    border: `1px solid ${vars.color.primary}`,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.2s",
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.onPrimary,
        ":hover": { backgroundColor: vars.color.primaryStrong },
      },
      secondary: {
        backgroundColor: vars.color.surface,
        color: vars.color.primaryStrong,
        ":hover": { backgroundColor: vars.color.primarySoft },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
