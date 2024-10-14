const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const fs = require("fs").promises; // Use fs.promises to read the file

let privateKey = ""; // Declare privateKey outside to make it accessible

// Read the private key from the file
fs.readFile("PrivateKey.txt", "utf8")
  .then((text) => {
    privateKey = text.trim(); // Store the private key and remove any extraneous whitespace
  })
  .catch((e) => console.error("Error reading private key:", e));

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  if (!privateKey) {
    return res.status(500).json({ error: "Private key not loaded" });
  }

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": privateKey } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response?.status || 500).json(e.response?.data || { error: "An error occurred" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
