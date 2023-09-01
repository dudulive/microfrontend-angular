const concat = require("concat");
(async function build() {
  const files = [
    "./dist/header/runtime.js",
    "./dist/header/polyfills.js",
    "./dist/header/main.js",
  ];
  await concat(files, "./dist/header/header.js");
})();