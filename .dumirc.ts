import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: '/yui-rc/',
  base: '/yui-rc/',
  themeConfig: {
    name: 'yui-rc',
    socialLinks: {
      github: 'https://github.com/yuandapeng/yui-rc',
    },
  },
});
