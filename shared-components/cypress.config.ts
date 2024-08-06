import { nxComponentTestingPreset } from '@nx/next/plugins/component-testing';
import { defineConfig } from 'cypress';

const nxComponentConfig = nxComponentTestingPreset(__filename);

const config = defineConfig({
  component: {
    ...nxComponentConfig,
    devServer: {
      ...nxComponentConfig.devServer,
      webpackConfig: {
        ...nxComponentConfig.devServer.webpackConfig,
      },
    },
  },
});

console.log(config.component?.devServer?.webpackConfig.plugins);

export default defineConfig({
  component: nxComponentTestingPreset(__filename),
});
