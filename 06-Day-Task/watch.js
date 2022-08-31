let start = document.querySelector("#start-button");
let reset = document.querySelector("#reset-button");

let time = document.querySelector("#timer");

let min1 = 0;
let min2 = 0;
let sec1 = 0;
let sec2 = 0;
let mSec = 0;
let mSec3 = 0;

start.addEventListener("click", (e) => {
  e.preventDefault();
  let startFunc = setInterval(() => {
    sec1++;
    if (sec1 < 10) {
      time.innerHTML = `${min2}${min1}:${sec2}${sec1}:`;
    } else {
      sec1 = 0;
      sec2++;
    }

    if (sec2 == 9) {
      sec2 = 0;
      min1++;
    }
    if (min1 == 9) {
      min1 = 0;
      min2++;
    }
  }, 1000);

  ////////////////////////////////////////////////////////
  let dt = new Date();
  //   mSec = dt.getMilliseconds()

  console.log(mSec);
  let startFuncSec = setInterval(() => {
    setInterval(() => {
      mSec++;

      time.innerHTML = `${min2}${min1}:${sec2}${sec1}:${mSec}`;
      if (mSec > 998) {
        mSec = 0;
      }
    }, 1);
  }, 1);
  ////////////////////////////////////////////////////
});
//////////////////////////////////////////////////////////////////////////

// ...............COPY..........................
