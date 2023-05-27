// Importing 'crypto' module
const crypto = require("crypto"),
  // Returns the names of supported hash algorithms
  // such as SHA1,MD5
  hash = crypto.getHashes();

// Create hash of SHA1 type
x = "Geek";

// 'digest' is the output of hash function containing
// only hexadecimal digits
hashPwd = crypto.createHash("sha1").update(x).digest("hex");

console.log(hash);
