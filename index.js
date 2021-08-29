function whateverToUpperSnakeCase(str) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*1|b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toUpperCase())
      .join("_")
  );
}

let text = "";
function build(obj, key) {
  for (let k in obj) {
    if (typeof obj[k] == "string" || typeof obj[k] == "number") {
      let prefix = key ? key.toUpperCase() + "_" : "";
      let exportString =
        prefix + whateverToUpperSnakeCase(k) + "=" + obj[k] + "\n";
      text += exportString;
    } else if (typeof obj[k] == "object") {
      build(obj[k], k);
    }
  }
  return text;
}

//NOTE: TODO build() not working with number values
const foo = {
  api_key: "25afwa",
  "setup-test": "isTheApi",
  abi: {
    golden: "sfaw",
    apple: "test2",
  },
};

console.log(foo);

console.log(build(foo, "FIREBASE"));
