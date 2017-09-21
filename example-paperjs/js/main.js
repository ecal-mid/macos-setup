'use strict';

let waves = [];
let mouse = {x: 0, y: 0};

function setupWaves() {
  for (let i = 0; i < 10; i++) {
    // create a wave
    let wave = new Wave();
    wave.offsetY = i * 100;
    waves.push(wave);
  }
}

function setWavesFrequency(freq) {
  for (let wave of waves) {
    wave.frequency = freq;
  }
}

function setRandomWavesFrequency() {
  let freq = Math.random() * 10;
  setWavesFrequency(freq);
}

function svgLoaded(item, svg) {
  item.position.x = window.innerWidth * 0.5;
  item.position.y = window.innerHeight * 0.5;
  let letters = item.children;
  for (let letter of letters) {
    letter.on('mouseenter', (ev) => {
      ev.target.fillColor = 'white';
      setRandomWavesFrequency();
    });
    letter.on('mouseleave', (ev) => ev.target.fillColor = 'black');
  }
}

function onMouseMove(ev) {
  mouse = ev.point;
}

// The onFrame function is called up to 60 times a second
function onFrame(event) {
  // for each wave of our waves array
  for (let wave of waves) {
    // update wave
    wave.update(event);
  }
}

// setup paper js
let canvas = document.getElementById('canvas');
paper.setup(canvas);
paper.view.on('frame', onFrame);
paper.view.on('mousemove', onMouseMove);

// Setup waves
setupWaves();

// Load SVG file
paper.project.importSVG('res/hello.svg', svgLoaded);
