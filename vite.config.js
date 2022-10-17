export default {
  root: './',
  build: {
    emptyOutDir: false,
    outDir: './',
    assetsDir: 'public_html/assets/',
    rollupOptions: [
      {
        input: 'less/frontend.less',
      },
      {
        input: 'less/backend.less',
      },
    ],
  },
}