import { howMany } from "./result.js";

export const submit = (answer) => {
  let result;
  let num = document.getElementById("input").value;
  num = num.toString();
  if (answer === undefined) {
    return;
  } else if (num === answer) {
    document.getElementById("result-message").innerHTML = "";
    document.getElementById("correct-message").style.display = "block";
  } else {
    console.log(num);
    result = howMany(num, answer);
    let resultDiv = document.createElement("div");
    resultDiv.textContent = result;
    document.getElementById("result-sheet").style.display = "block";
    document.getElementById("result-message").innerHTML = "";
    document.getElementById("result-message").appendChild(resultDiv);
    document.getElementById("result-message").style.display = "block";
  }
};
export function restart() {
  location.reload();
}

export function exit() {
  window.close();
}