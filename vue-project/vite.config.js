import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from '@rollup/plugin-html'
import { name } from './package.json'
import qiankun, { transformAssetUrl } from 'vite-plugin-qiankun'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue-project', {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
    html({
      // copy 自 https://github.com/rollup/plugins/blob/db4a3f2e8ebd3328b5d43bcb272589866dfd5729/packages/html/src/index.ts#L34
      template: ({ attributes, files, meta, publicPath, title }) => {
        const makeHtmlAttributes = (attributes) => {
          if (!attributes) {
            return ''
          }
          const keys = Object.keys(attributes)
          return keys.reduce(
            (result, key) => (result += ` ${key}="${attributes[key]}"`),
            ''
          )
        }
        const scripts = (files.js || [])
          .map(({ fileName }) => {
            const attrs = makeHtmlAttributes(attributes.script)
            return `<script src="${publicPath}${fileName}"${attrs}></script>`
          })
          .join('\n')

        return `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <link rel="icon" href="/favicon.ico">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Vite App</title>
              </head>
            
              <body>
                <div id="app"></div>
                ${scripts}
              </body>
            </html>`
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8888, // 端口号
    open: true, // 是否自动在浏览器打开
  },
  build: {
    // assetsInlineLimit: 0, // 为了让图片单独打包
    target: 'esnext',
    lib: {
      name,
      entry: 'src/main.js',
      formats: ['umd'],
    },
  },
})
