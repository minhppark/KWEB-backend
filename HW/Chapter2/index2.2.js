const fs = require('fs');
const path = require('path');
const util = require('util');

const dir = './test';

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.stat);

const searchFile = async directory => {
    const files = await readDir(directory);
    files.forEach(async file => {
        const filePath = path.join(directory, file);
        const stat = await readFile(filePath);
        if (stat.isDirectory()) await searchFile(filePath);
        else if (path.extname(filePath) === '.js') console.log(filePath);
    });
}

(async () => {
    try {
        await searchFile(dir);
    } catch (err) {
        console.error(err);
    }
})();