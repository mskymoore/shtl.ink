/** @type {import('next').NextConfig} */
/*
const getEnvironmentVariable = (environmentVariable) => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};
*/

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env["API_BASE_URL"]}/:path*`,
      },
    ]
  },
  env: {
    APP_NAME: process.env["APP_NAME"],
    COOKIE_DOMAIN: process.env["COOKIE_DOMAIN"],
    BASE_URL: process.env["BASE_URL"],
    API_BASE_URL: process.env["API_BASE_URL"]
  }
}

module.exports = nextConfig
