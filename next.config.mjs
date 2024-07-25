/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: true },
  env: {
    // NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "/src/styles/_variables.scss";
    `,
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
