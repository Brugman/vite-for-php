export default {
  // root: './',
  build: {
    // emptyOutDir: false,
    // outDir: './',
    // assetsDir: 'public_html/assets/',
    rollupOptions: {
      input: [
        'less/less-frontend.less',
        'less/less-backend.less',
        'scss/scss-frontend.scss',
        'scss/scss-backend.scss',
        'js/frontend.js',
        'js/backend.js',
      ],
      output: {
        dir: "public_html/assets/",
        assetFileNames: "[name].min.css",
        entryFileNames: "[name].min.js",
      },
    },
  },
}