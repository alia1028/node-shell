const exportPwd = require("./pwd");
const exportLs = require("./ls");
const exportCat = require("./cat");
// output a prompt
process.stdout.write("prompt > ");

//the stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    exportPwd();
  } else if (cmd === "ls") {
    exportLs();
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
