const fs = require("fs");

module.exports = function () {
  fs.readFile("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    }
    process.stdout.write(files.join("\n"));
    process.stdout.write("prompt > ");
  });
};
