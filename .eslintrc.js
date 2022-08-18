module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-nancy`
  // and `eslint-config-nancy-ts`.
  extends: ["nancy-ts"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
