module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["nancy", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
        minimumDescriptionLength: 10,
      },
    ],
  },
};
