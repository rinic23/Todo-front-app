const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const { withEffectoReactAliases } = require('effector-next/tools');

const enhance = withEffectoReactAliases();

const fs = require('fs');

const nextConfig = {
  modifyVars: {
    '@primary-color': '#808080',
    '@font-size-base': '16px',
    '@text-color': 'rgba(38, 38, 38, 0.8)',
    '@line-height-base': '150%',
    '@font-family': 'Fira Sans, sans-serif',
  },

  webpack: (config, { webpack }) => {
    return config;
  },
};

module.exports = withPlugins([withAntdLess, enhance], nextConfig);
