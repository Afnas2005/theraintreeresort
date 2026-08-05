import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled to avoid requiring the external `babel-plugin-react-compiler`.
  // Enable only if you've installed the plugin and confirmed compatibility.
  reactCompiler: false,
};

export default nextConfig;
