import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#15803d",
    primaryStrong: "#166534",
    primarySoft: "#dcfce7",
    onPrimary: "#ffffff",
    background: "#f0f7f3",
    surface: "#ffffff",
    text: "#0f172a",
    textMuted: "#475569",
    border: "#e2efe7",
    borderStrong: "#6b7280",
    accent: "#b45309",
    danger: "#dc2626",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radius: {
    sm: "8px",
    md: "16px",
    full: "999px",
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
    xxl: "28px",
  },
  size: {
    control: "44px",
    thumbnail: "96px",
    content: "1120px",
  },
});

export const desktopMinWidth = "768px";
