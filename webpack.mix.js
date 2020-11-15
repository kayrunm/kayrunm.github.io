let mix = require('laravel-mix');

mix.sass('src/styles/main.scss', 'docs/css')
    .js('src/scripts/main.js', 'docs/js')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')('./tailwind.config.js'),
        ]
    })
    .setPublicPath('docs');
