import { defineConfig } from 'dumi';

const BaseUrl = '/leran_project/'; //  => /仓库名/

export default defineConfig({
  title: 'dumi-doc',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  base: BaseUrl,
  publicPath: BaseUrl
});
