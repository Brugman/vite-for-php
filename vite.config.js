export default {
  // root: './',
  build: {
    // emptyOutDir: false,
    // outDir: './',
    // assetsDir: 'public_html/assets/',
    target: ['es2020','chrome58','edge16','firefox57','node12','safari11'],
    sourcemap: true,
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