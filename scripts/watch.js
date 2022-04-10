const rollup = require('rollup');

const watcher = rollup.watch({});

watcher.on('BUNDLE_END', (event) => {
  console.log('BUNDLER EDE', event);
});
