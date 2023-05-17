module.exports = {
  // TODO: Support non turbo projects by conditionally extending from turbo
  extends: ["turbo", "prettier"],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2020: true,
  },
};
