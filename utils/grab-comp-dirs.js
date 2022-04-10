import path from 'path';
import fs from 'fs';

const src = path.join(__dirname, '../src');

const grabComponentsDirecrories = () => {
  const list = fs.readdirSync(src);
  let result = [];

  for (const name of list) {
    if (fs.lstatSync(`${src}/${name}`, { withFileTypes: true }).isDirectory())
      result = [...result, path.join(__dirname, `../src/${name}/index.ts`)];
  }

  return result;
};

export default grabComponentsDirecrories;
