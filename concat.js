const concat = require("concat");
const proj_name = "keycloak-sso2";
(async function build() {
  const files = [
    `./dist/${proj_name}/runtime.js`,
    `./dist/${proj_name}/polyfills.js`,
    `./dist/${proj_name}/main.js`,
  ];
  await concat(files, `./dist/${proj_name}/micro-fe.js`);
})();
