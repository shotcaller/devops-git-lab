const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: gloabls.node,
    },
    rules: {
      "no-unused-vars": "error",
    },
  },

  {
	files: ["**/*.test.js", "**/*.spec.js"],
	languageOptions: {
		globals: globals.jest,
},
}
];
