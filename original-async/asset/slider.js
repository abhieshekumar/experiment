const changed = [];
const value = [];
const range = document.getElementById('range');
const rangeV = document.getElementById('rangeV');
const setValue = ()=> {
  changed.push(new Date().getTime());
  value.push(range.value);
  const newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) );
  const newPosition = 10 - (newValue * 0.2);
  rangeV.innerHTML = `<span>${range.value}</span>`;
  rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
};

document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

function complete() {
  let payload = {
    "slider" : {
      "updated": changed,
      "value": value
    }
  };
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  const slider = payload["slider"];
  currentDoc.set({slider},{merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}