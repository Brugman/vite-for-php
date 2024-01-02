# Vite for PHP development

## Can Vite replace Gulp?

The dev community claims we should be moving to Vite. It's "out of the box" capabilities seem to be enough for JS developers. Making Vite work in a PHP project with multiple CSS outputs however seems to require plenty of configuration, and fighting a system that was not designed for this purpose.

Failures:
- No full control over output filenames.
- No separated tasks, causing a page reload when only a HMR would be sufficient.
- No processing of empty files.
- No linting, or error notification.
- No sourcemaps.

Some of these can probably be overcome by adding more modules and adding further complexity to the setup. Considering the shaky core I did not feel it was worth exploring this.

My opinion may change in the future. The `method-e` branch came closest to my goals, if you wish to continue testing.

A related repo of mine is [vite-for-wordpress](https://github.com/Brugman/vite-for-wordpress).

## Inputs & outputs

```sh
/less/frontend.less > /public_html/assets/less-frontend.css
/less/backend.less  > /public_html/assets/less-backend.css
/scss/frontend.scss > /public_html/assets/scss-frontend.css
/scss/backend.scss  > /public_html/assets/scss-backend.css
/js/frontend.js     > /public_html/assets/frontend.js
/js/backend.js      > /public_html/assets/backend.js
```

## Feature testing

:heavy_check_mark: Run once\
:heavy_check_mark: Run continously

:grey_question: Run in development mode\
:grey_question: Run in production mode

:heavy_check_mark: Compile Less to CSS\
:heavy_check_mark: Compile SCSS to CSS\
:heavy_check_mark: Compile ES to JS\
:heavy_check_mark: Autoprefix CSS\
:heavy_check_mark: Minify CSS\
:heavy_check_mark: Minify JS\
:grey_question: CSS sourcemaps\
:grey_question: JS sourcemaps\
:heavy_check_mark: Multiple CSS tasks\
:heavy_check_mark: Multiple JS tasks

:heavy_check_mark: Reload on CSS changes\
:heavy_check_mark: Reload on JS changes\
:heavy_check_mark: Reload on PHP changes

:grey_question: Notification on CSS error\
:grey_question: Notification on JS error

:heavy_check_mark: Keep going on CSS error\
:heavy_check_mark: Keep going on JS error

<!-- :grey_question: -->
<!-- :x: -->
<!-- :heavy_check_mark: -->
