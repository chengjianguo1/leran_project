const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const execSync = require('child_process').execSync;


// process.cwd(); 
const packageName = process.argv.slice(2)[0];
const workdir = process.cwd();

if (!packageName) {
  return ;
}

const packageDir = workdir + '/packages/' + packageName;

createPackages();

async function createPackages() {
  await fs.mkdir(packageDir);
  await fs.mkdir(packageDir + '/lib');
  // index.jsx
  const indexFileContent = await fs.readFile(workdir + '/scripts/template/index.jsx');
  await fs.writeFile(packageDir + '/lib/index.jsx', indexFileContent);
  // package.json
  const packageJson = await fs.readFile(workdir + '/scripts/template/package.json');
  let createPackageJson = JSON.parse(packageJson);
  // let createPackageJson = packageJson.toString();
  createPackageJson.name = packageName;

  const name = execSync('git show -s --format=%cn').toString();
  const email = execSync('git show -s --format=%ce').toString();
  createPackageJson.author = name + ' ' + email;
  createPackageJson.main = 'lib/index.jsx';

  // JSON.stringify(data,null,4) 后面这样加上参数就可以了 4代表格式化数据的时候前面填充4个空格
  await fs.writeFile(packageDir + '/package.json', JSON.stringify(createPackageJson, null, 4));
}




