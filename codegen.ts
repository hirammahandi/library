import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [process.env.GRAFBASE_API_URL as string]: {
      headers: {
        "x-api-key": process.env.GRAFBASE_API_KEY,
      },
    },
  },
  generates: {
    "src/__generated__/": {
      preset: "gql-tag-operations-preset",
      // plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
  documents: ["./src/features/**/*ts"],
};

export default config;
