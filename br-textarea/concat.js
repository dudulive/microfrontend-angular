const concat = require("concat");
(async function build() {
  const files = [
    "./dist/br-textarea/runtime.js",
    "./dist/br-textarea/polyfills.js",
    "./dist/br-textarea/main.js",
  ];
  await concat(files, "./dist/br-textarea/br-textarea.js");
})();
