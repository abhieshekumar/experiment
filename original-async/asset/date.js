var elems = document.querySelectorAll('.datepicker');
var instances = M.Datepicker.init(elems,{onOpen:opened, onClose: closed});

const open = [];
const close = [];
const dates = [];

function opened() {
  open.push(new Date().getTime());
}

function closed() {
  close.push(new Date().getTime());
  dates.push(M.Datepicker.getInstance(document.querySelector('#mater-date')).date);
}

function complete() {
  let payload = {
    "date": {
      "opened": open,
      "closed": close,
      "dates": dates
    }
  }
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  const date = payload["date"];
  currentDoc.set({date}, {merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}