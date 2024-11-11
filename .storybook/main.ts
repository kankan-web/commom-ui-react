import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // 确保 config.module.rules 存在
    config.module = config.module || { rules: [] };
    if (!Array.isArray(config.module.rules)) {
      config.module.rules = [];
    }
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader", // 将 CSS 插入到 DOM
        "css-loader", // 解析 CSS
        "less-loader", // 处理 Less 文件
      ],
    });
    return config;
  },
};

export default config;
