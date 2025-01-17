/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../components/ui/**/*.mdx", 
    "../components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite', // 👈 Updated as requested
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;
