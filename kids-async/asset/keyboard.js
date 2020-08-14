let myTime;
myTime = new Date().getTime();

function complete() {
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  let payload = {
    "keyboard": {
      "final_text": document.querySelector('#keyboardTest').innerHTML,
      "final_time_taken": new Date().getTime() - myTime
    }
  }
  const keyboard = payload["keyboard"];
  currentDoc.set({keyboard},{merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}

let upper = true;
function charClicked(ele) {
  document.getElementById('keyboardTest').innerHTML += (upper === true)?ele.innerHTML:String.fromCharCode(ele.innerHTML.charCodeAt()+32);
  ele.classList.add('alphabets-background');
  setTimeout(function() {
    ele.classList.remove('alphabets-background');
  }, 300);
}

function deleteChar() {
  let ele = document.getElementById('keyboardTest');
  let text = ele.innerHTML;
  if(text.length>0){
    ele.innerHTML = text.substring(0,text.length-1);
  }
}

function space() {
  document.getElementById('keyboardTest').innerHTML += ' ';
}

function toggleCase(ele){
  if(ele.innerHTML === '⇩') {
    ele.innerHTML  = '⇧';
    document.querySelector('#keyboard').classList.add('alphabets-capital-lower');
    document.querySelector('#keyboard').classList.remove('alphabets-capital-upper');
    upper = false;
  } else {
    ele.innerHTML = '⇩';
    document.querySelector('#keyboard').classList.add('alphabets-capital-upper');
    document.querySelector('#keyboard').classList.remove('alphabets-capital-lower');
    upper = true;
  }
}

