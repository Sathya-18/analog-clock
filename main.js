
const clock = document.getElementById("clock");
const line = document.getElementsByClassName("lines");
const number = document.getElementsByClassName("number");
const number1 = document.getElementsByClassName("num");
const line2 = document.getElementsByClassName("lines2");

for (let i = 1; i < 60; i++) {
  var a = 6 * i;
  clock.innerHTML = clock.innerHTML + "<div class='lines'></div>";
  line[i].style.transform = `rotate(${a}deg)`;
}

for (let i = 1; i < 12; i++) {

  clock.innerHTML = clock.innerHTML + `<div class='num' ><b id='num${i}'>` + i + "</b></div>";
  number1[i].style.transform = "rotate(" + 30 * i + "deg)";
  var curN = document.getElementById(`num${i}`);
  curN.style.transform = "rotate(" + (-30 * i) + "deg)";
}

for (let i = 1; i < 12; i++) {
  var b = 30 * i;
  clock.innerHTML = clock.innerHTML + "<div class='lines2'></div>";
  line2[i].style.transform = `rotate(${b}deg)`;
}

const secHand = document.querySelector('.secHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');
const btn = document.getElementById("btn");

const hourInt = document.getElementById("hour");
const minInt = document.getElementById("minute");
const secInt = document.getElementById("seconds");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

function disable() {
  submit.disabled = true;
  cancel.disabled = true;
}
disable();

function changeTime() {
  let s = Math.floor(Math.random() * 60);
  let m = Math.floor(Math.random() * 60);
  let h = Math.floor(Math.random() * 12);

  let second = s * 6;
  let minute = ((m * 60) + s) * 0.1;
  let hour = ((h * 60) + m) * 0.5;

  hourHand.style.transform = `rotate(${hour + 90}deg)`;
  minHand.style.transform = `rotate(${minute + 90}deg)`;
  secHand.style.transform = `rotate(${second + 90}deg)`;
  // value + 90 deg because, the div original postion is transformed '90' degree to achieve orgin at 12'o clock in css

}


btn.addEventListener("click", changeTime)

function changeTime2() {

  let h1 = parseInt(hourInt.value);
  let m1 = parseInt(minInt.value);
  let s1 = parseInt(secInt.value);

  let second2 = s1 * 6;
  let minute2 = ((m1 * 60) + s1) * 0.1;
  let hour2 = ((h1 * 60) + m1) * 0.5;

  hourHand.style.transform = `rotate(${hour2 + 90}deg)`;
  minHand.style.transform = `rotate(${minute2 + 90}deg)`;
  secHand.style.transform = `rotate(${second2 + 90}deg)`;

}

hourInt.addEventListener("change", () => {
  submit.disabled = false;
  cancel.disabled = false;
})
minInt.addEventListener("change", () => {
  submit.disabled = false;
  cancel.disabled = false;
})
secInt.addEventListener("change", () => {
  submit.disabled = false;
  cancel.disabled = false;
})

submit.addEventListener("click", () => {
  changeTime2();
  submit.disabled = true;
})

cancel.addEventListener("click", () => {
  hourInt.value = "0";
  minInt.value = "0";
  secInt.value = "0";
  changeTime2();
  disable();
})