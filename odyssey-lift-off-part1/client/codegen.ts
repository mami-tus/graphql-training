import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // // 4000 ポートすでに使われているので 4001 にしている
  schema: 'http://localhost:4001',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
