import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  { parser: "@typescript-eslint/parser" },
  {
    rules: {
      "import/extensions": [
        "error",
        "always",
        {
          js: "always",
        },
      ],
    },
  },
  {
    plugins: {
      import: pluginImport,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
