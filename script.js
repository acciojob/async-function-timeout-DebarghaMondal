
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}
showMessage().then(()=>{
	output.innerHTML = text.value;
});
btn.addEventListener("click", showMessage);
