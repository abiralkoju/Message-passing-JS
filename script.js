const textBox = document.getElementById("text-box");
const Btn = document.getElementById("submit");
const errorMsg = document.getElementById("error-msg");

function addTask() {
  if (textBox.value === "") {
    errorMsg.style.display = "block";
    setTimeout(function () {
      errorMsg.style.display = "none";
    }, 4000);
  } else {
    let content = document.getElementById("content");
    content.innerHTML = textBox.value;
  }
  textBox.value = "";
}

textBox.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    Btn.click();
  }
});
