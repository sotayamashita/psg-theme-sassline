// dependencies
var fs = require('fs')
var postcss = require('postcss')

// css to be processed
var css = fs.readFileSync('./src/style.css', 'utf8')
// options for styleguide
var options = {
  name: 'PSG Theme Sassline',
  theme: 'sassline',
}

// process css
var output = postcss([
  require('cssnext')(),
  require('postcss-nested')(),
])
  .process(css, {
    // `from` option is required so relative import can work from input dirname
    from: 'src/style.css'
  })
  .css

// write css
fs.writeFileSync('./style.css', output)
