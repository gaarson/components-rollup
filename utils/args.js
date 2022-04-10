const args = process.argv.slice(2);

const argsDefinitions = [
  { name: 'coverage', alias: 'c', type: Boolean },
  { name: 'ci', type: Boolean },
];

const result = {};

const removeTires = (str) => str ? str.replace('-', '').replace('-', '') : null;

argsDefinitions.forEach((def) => {
  result[def.name] = def.default;

  const arg = args.findIndex((item) => {
    const argument = removeTires(item);
    const nameRegex = new RegExp(`(?!-+)(${def.name})(?!==)`);
    const aliasRegex = new RegExp(`(^-)(${def.alias})`);
    const name = removeTires(item.match(nameRegex) ? item.match(nameRegex)[0] : null);
    const alias = removeTires(item.match(aliasRegex) ? item.match(aliasRegex)[0] : null);

    return name === argument || alias === argument;
  });

  if (args[arg]) {
    const value = args[arg].split('=')[1]
      || (def.type === String && args[arg + 1]);

    result[def.name] = value || true;
  }
});

module.exports = result;
