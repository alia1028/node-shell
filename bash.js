const exportPwd = require("./pwd");
const exportLs = require("./ls");
const exportCat = require("./cat");
// output a prompt
process.stdout.write("prompt > ");

//the stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(' ');
  if (cmd[0] === "pwd" && cmd.length === 1) {
    exportPwd();
  } else if (cmd[0] === "ls" && cmd.length === 1) {
    exportLs();
  }else if (cmd[0] === 'cat' && cmd.length>1){
    exportCat(cmd[1])
  } else {
    process.stdout.write("You typed: " + cmd.join(' '));
  }
    process.stdout.write("\nprompt > ");
});
