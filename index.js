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

//NOTE: TODO build() not working with number values
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

document.getElementById("textarea").
addEventListener("input", ()=>{
  let bayaci_object = document.getElementById("textarea").value
  console.log(eval('(' + bayaci_object + ')'))
 ;
});