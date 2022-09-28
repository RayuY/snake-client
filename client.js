const net = require("net");
const {port, ip} = require("./constants")

const connect = function () {
  const conn = net.createConnection({
    host: ip,
    port: port,
  });
  
  conn.on("connect", () => {
    console.log("successfully connection")
    conn.write("Name: O_O");
    conn.write("Say: I WILL EAT YOU TOO!")
  });
  
  conn.on("data", (data => {
    console.log("Server says: ", data)
  }))
  
  conn.setEncoding("utf8");
  return conn;
};

// console.log("Connecting ...");
// connect();


module.exports = {connect};
