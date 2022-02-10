const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const { withEffectoReactAliases } = require('effector-next/tools');

const enhance = withEffectoReactAliases();

const fs = require('fs');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dobroRuble',
        destination: '/dobroRuble/info',
        permanent: true,
      },
      {
        source: '/profile-user/citizen-card',
        destination: '/citizen-card',
        permanent: true,
      },
    ];
  },
  modifyVars: {
    '@primary-color': '#3048a6',
    '@font-size-base': '16px',
    '@text-color': 'rgba(38, 38, 38, 0.8)',
    '@line-height-base': '150%',
    '@font-family': 'Fira Sans, sans-serif',
  },
  images: {
    domains: [
      'nnolen-swimlane-cdn.dev.ladcloud.ru',
      'cdn.nn-card.ru',
      '165104.selcdn.ru',
      'cdn.dev.tiny-services.ladcloud.ru',
      'cdn.staging.nn-card.ru',
      'static-nnolen-staging',
      'static-nnolen-prod',
      'cdn.dev.games.ladcloud.ru',
    ],
  },

  webpack: (config, { webpack }) => {
    return config;
  },
};

module.exports = withPlugins([withAntdLess, enhance], nextConfig);
