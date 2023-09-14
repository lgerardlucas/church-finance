import path from "path";

async function getBaseDir() {
  return path.dirname(__dirname);
}

module.exports = {
  base_dir: getBaseDir,
};
