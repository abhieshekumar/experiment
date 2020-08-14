const ele = document.querySelector('#keyboardTest');
const focus = [];
const blur = [];

ele.addEventListener('focus',updateFocus);
ele.addEventListener('blur',updateBlur);

function updateFocus() {
  console.log("Keyboard - focus");
  focus.push(new Date().getTime());
}

function updateBlur() {
  console.log("Keyboard - blur");
  blur.push(new Date().getTime());
}

function complete() {
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  let payload = {
    "keyboard": {
      "focussed": focus,
      "blurred": blur,
      "final_text": document.querySelector('#keyboardTest').value,
      "final_time_taken": blur[blur.length-1]-focus[focus.length-1]
    }
  }
  const keyboard = payload["keyboard"];
  currentDoc.set({keyboard},{merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}