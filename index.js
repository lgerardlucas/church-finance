const { settings, base_dir } = require("./src/settings");
const { Church } = require("./src/church/church");

const church = new Church(
  "Igreja São José",
  "Av. Duque de Caxias, 44",
  "Pelotas",
  "RS",
  "96030-789"
);

async function main() {
  const path_sistem = await base_dir();
  console.log(path_sistem);
  console.log(church.getChurchInformation());
}

main();
