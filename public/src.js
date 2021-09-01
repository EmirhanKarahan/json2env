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

function copyTextContent(id) {
  const outputArea = document.getElementById(id);
  navigator.clipboard.writeText(outputArea.textContent);
  const messageBox = document.getElementById("copied-message");
  messageBox.style.display = "block";
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 1000);
}

const inputArea = document.getElementById("textarea");
const outputArea = document.getElementById("output");
outputArea.setAttribute("contenteditable", true);

inputArea.addEventListener("input", () => {
  let userInput = inputArea.value;
  outputArea.textContent = "your output will be shown here";
  outputArea.style.color = "var(--text-color)";
  outputArea.style.borderWidth = "1px";

  if (userInput) {
    outputArea.style.borderWidth = "2px";
    try {
      const outputObject = eval("(" + userInput + ")");
      const output = build(outputObject);
      text = "";
      if (output) {
        outputArea.textContent = output;
        outputArea.style.color = "limegreen";
      }
    } catch (e) {
      outputArea.textContent = e;
      outputArea.style.color = "orangered";
    }
  }
});
