import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["100.104.25.60", "192.168.12.100"],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
