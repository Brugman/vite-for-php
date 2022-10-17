export default {
  root: './',
  build: {
    emptyOutDir: false,
    outDir: './',
    assetsDir: 'public_html/assets/',
    rollupOptions: {
      input: [
        'less/frontend.less',
        'less/backend.less',
        'scss/frontend.scss',
        'scss/backend.scss',
        'js/frontend.js',
        'js/backend.js',
      ],
    },
  },
}