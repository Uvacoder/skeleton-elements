const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const babelOptions = (modules) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules,
        loose: true,
      },
    ],
  ],
});

function transformFile(fileName, modules, isUtils) {
  const moduleType = modules ? 'cjs' : 'esm';
  const input = path.resolve(
    __dirname,
    isUtils ? `../src/utils/${fileName}` : `../src/vue/${fileName}`,
  );
  const output = path.resolve(
    __dirname,
    fileName === 'index.js'
      ? `../package/vue/${fileName.replace('.js', `.${moduleType}.js`)}`
      : `../package/vue/${moduleType}/${fileName}`,
  );
  return babel.transformFile(input, babelOptions(modules), (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    let fileContent = result.code.replace(/\.\.\/utils\//g, './');
    if (fileName.indexOf('index') >= 0) {
      fileContent = fileContent.replace(
        /\.\/Skeleton/g,
        `./${moduleType}/Skeleton`,
      );
    }
    fs.writeFileSync(path.resolve(output), fileContent);
  });
}

function build() {
  // Transform scripts
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/vue'))
    .filter((fileName) => fileName[0] !== '.')
    .filter((fileName) => fileName[0] !== '.' && fileName.indexOf('.d.ts') < 0);

  const types = fs
    .readdirSync(path.resolve(__dirname, '../src/vue'))
    .filter(
      (fileName) =>
        fileName[0] !== '.' &&
        fileName.indexOf('.d.ts') > 0 &&
        fileName.indexOf('index.d.ts') < 0,
    );

  const utils = fs
    .readdirSync(path.resolve(__dirname, '../src/utils'))
    .filter((fileName) => fileName[0] !== '.');

  filesToTransform.forEach((file) => transformFile(file, 'commonjs'));
  filesToTransform.forEach((file) => transformFile(file, false));

  utils.forEach((file) => transformFile(file, 'commonjs', true));
  utils.forEach((file) => transformFile(file, false, true));

  // Copy types
  types.forEach((typeFile) => {
    fs.copyFileSync(
      path.resolve(__dirname, '../src/vue', typeFile),
      path.resolve(__dirname, '../package/vue/types', typeFile),
    );
  });
  fs.copyFileSync(
    path.resolve(__dirname, '../src/vue', 'index.d.ts'),
    path.resolve(__dirname, '../package/vue', 'index.d.ts'),
  );
}

build();
