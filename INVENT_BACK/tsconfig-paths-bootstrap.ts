import * as tsConfig from './tsconfig.json';
import * as tsConfigPaths from 'tsconfig-paths';

tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.outDir,
  paths: tsConfig.compilerOptions.paths,
});
