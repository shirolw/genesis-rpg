const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

/**
 * @type {import('next').NextConfig}
 */
const config = {
  trailingSlash: true,
  basePath,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = () => {
  return config;
};
