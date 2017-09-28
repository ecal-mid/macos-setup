'use strict';

let img = new Image();
let data;
let currId = 0;

function loop() {
  currId++;
  if (currId > data.length) {
    let test = toto
    currId = 0;
  }
  img.src = 'https://intranet.ecal.ch/img/photo/' + data[currId].img;
  setTimeout(loop, 50);
}

fetch('data/students.json').then((r) => r.json()).then((json) => {
  data = json;
  document.body.appendChild(img);
  loop();
});
