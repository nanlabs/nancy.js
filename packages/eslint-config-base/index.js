module.exports = {
  // TODO: Support non turbo projects by conditionally extending from turbo
  extends: ["turbo", "prettier"],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2020: true,
  },
  rules: {
    // Allow plain (non-PROCESS_ENV-style) env vars that are intentionally
    // read via `process.env.${name}` but aren't declared in any turbo.json
    // (the eslint-plugin-turbo rule treats them as "undeclared dependencies").
    // Format: `${name}` matches when the code references `process.env.${name}`.
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        allowList: ["^DEBUG$"],
      },
    ],
  },
};
