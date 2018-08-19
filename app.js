function requireAll(r) {
  r.keys().forEach(r);
}

// Import all JS files
requireAll(require.context("./src/js", true, /\.js$/));
// Import all CSS/SASS/SCSS files
requireAll(require.context("./src/scss", true, /\.scss$/));
// Import all IMG files
const img = requireAll(
  require.context("./src/img", true, /\.(png|svg|jpg|gif)$/)
);
// Import all HTML files
requireAll(require.context("./src/", true, /\.(html|htm|)$/));
