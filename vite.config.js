import liveReload from 'vite-plugin-live-reload'

export default {
  root: 'public_html/',
  plugins: [
    liveReload([
      '**/*.php',
    ]),
  ],
  clearScreen: false,
  appType: 'custom',
  server: {
    strictPort: true,
  },
  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    outDir: './',
    assetsDir: 'assets/',
    rollupOptions: {
      input: [
        'js/frontend.js',
        'js/backend.js',
        'less/frontend-less.less',
        'less/backend-less.less',
        'scss/frontend-scss.scss',
        'scss/backend-scss.scss',
      ],
      output: {
        dir: "public_html/assets/",
        entryFileNames: "[name].min.js",
        assetFileNames: "[name].min.css",
      },
    },
  },
}