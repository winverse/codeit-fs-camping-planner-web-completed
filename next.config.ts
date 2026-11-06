import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: { mode: "auto" },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
};

export default withVanillaExtract(nextConfig);
