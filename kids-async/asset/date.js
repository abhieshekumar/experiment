const cal_day = {
  "changed":[],
  "value":[]
};
const cal_month = {
  "changed":[],
  "value":[]
};
const cal_year = {
  "changed":[],
  "value":[]
};

const cal_ele_day = document.querySelector('#cal-day');
const cal_ele_month = document.querySelector('#cal-month');
const cal_ele_year = document.querySelector('#cal-year');

function dayChanged(ele){
  cal_day["changed"].push(new Date().getTime());
  cal_day["value"].push(ele.value);
}

function monthChanged(ele){
  cal_month["changed"].push(new Date().getTime());
  cal_month["value"].push(ele.value);
}

function yearChanged(ele){
  cal_year["changed"].push(new Date().getTime());
  cal_year["value"].push(ele.value);
}

function complete() {
  let payload = {
    "calendar": {
      "day": cal_day,
      "month": cal_month,
      "year": cal_year
    }
  }
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  const calendar = payload["calendar"];
  currentDoc.set({calendar}, {merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}