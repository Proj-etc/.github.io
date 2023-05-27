// JS hash decrypt
// SHA-256 /-384 /-512. Default is 256
function hash(str, sha = "256") {
  const utf8 = new TextEncoder().encode(str);
  return crypto.subtle.digest("SHA-" + sha, utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
}
//Example
//const text = "test.test@test.com";
/*hash(text).then((hex) =>{
    $.ajax({
      headers: {
        Poop: hex
      }
    })
  });*/
