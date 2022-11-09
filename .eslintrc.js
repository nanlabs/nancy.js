module.exports = {
  root: true,
  extends: ["@nanlabs/eslint-config-ts"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
