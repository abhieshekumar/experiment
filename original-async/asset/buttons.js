function changeClass(ele, old, fresh) {
      ele.classList.remove(old);
      ele.classList.add(fresh);
    }

    function changeValue(ele, val) {
      ele.innerHTML = val;
    }

    const taps = {
      "btn1":[],
      "btn2":[],
      "btn3":[],
      "btn4":[]
    }

    const double_taps = {
      "btn1": {
        "taps":[],
        "double_taps":[]
      },
      "btn2": {
        "taps":[],
        "double_taps":[]
      },
      "btn3": {
        "taps":[],
        "double_taps":[]
      },
      "btn4": {
        "taps":[],
        "double_taps":[]
      },
    }

    const tapsize = {
      "btn1": [],
      "btn2": [],
      "btn3": [],
      "btn4": [],
      "btn5": [],
      "btn6": [],
      "btn7": [],
      "btn8": [],
      "btn9": [],
      "btn10": [],
      "btn11": [],
      "btn12": [],
    }

    function recordTap(id) {
      taps[id].push(new Date().getTime());
    }

    function recordDoubleTaps_click(id) {
      double_taps[id]["taps"].push(new Date().getTime());
    }

    function recordDoubleTaps_dblclick(id) {
      double_taps[id]["double_taps"].push(new Date().getTime());
    }

    function tapSize(id) {
      tapsize[id].push(new Date().getTime());
    }

    function complete() {
      let payload = {
        "buttons": {
          taps, double_taps, tapsize
        }
      }
      const button = document.querySelector('#dataButton');
      button.setAttribute('onclick', '');
      const buttons = payload["buttons"];
      currentDoc.set({buttons},{merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
    }