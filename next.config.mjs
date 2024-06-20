/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.tvmaze.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.tvmaze.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
