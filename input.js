let connection;


const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    console.log("used!")
    process.exit();
  }
  if (data === "g") {
    // console.log("pressed g");
    connection.write("Say: good work");
  }
  if (data === "w") {
    // console.log("pressed w");
    connection.write("Move: up");
  }
  if (data === "s") {
    // console.log("pressed s");
    connection.write("Move: down");
  }
  if (data === "a") {
    // console.log("pressed a");
    connection.write("Move: left");
  }
  if (data === "d") {
    // console.log("pressed d");
    connection.write("Move: right");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};