
const mix = require('laravel-mix');

mix.autoload({})
.react('src/js/main.js', 'dist/js/main.js')
.sass('src/scss/main.scss', 'dist/css/main.css')
.webpackConfig({
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
});