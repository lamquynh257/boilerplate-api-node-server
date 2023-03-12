const net = require("net");

const checkPort = async (req, res) => {
  const port = req.query.port;
  const host = req.query.host;

  const client = new net.Socket();

  client.connect(port, host, () => {
    res.send(`Port ${port} is open`);
    client.end();
  });

  client.on("error", (err) => {
    res.send(`Port ${port} is closed`);
  });
};

module.exports = {
  checkPort: checkPort,
};
