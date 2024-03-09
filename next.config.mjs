/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
