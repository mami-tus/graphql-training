import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // GraphQLスキーマの場所 4000 ポートすでに使われているので 4001 にしている
  schema: 'http://localhost:4001',
  // GraphQLのクエリやミューテーションが含まれているファイル
  documents: ['src/**/*.tsx'],
  generates: {
    // 生成されるファイルの出力先
    './src/__generated__/': {
      // クライアントサイドで利用するためのGraphQL型定義とクエリ実行関数を生成することを指定
      preset: 'client',
      // 生成されたコードでGraphQLクエリをgqlタグを使用して定義
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  // クエリやミューテーションが見つからない場合でもエラーを発生させない
  // ignoreNoDocuments: true,
};

export default config;
