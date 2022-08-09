
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

  clock.innerHTML = clock.innerHTML + "<div class='num'><b>" + i + "</b></div>";
  number1[i].style.transform = "rotate(" + 30 * i + "deg)"
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

function disable(){
  submit.disabled=true;
  cancel.disabled=true;
}
disable();

function changeTime() {
  let s = Math.floor(Math.random() * 60);
  let m = Math.floor(Math.random() * 60);
  let h = Math.floor(Math.random() * 12);

  let second = s * 6;
  let minute = m * 6;
  let hour = ((h * 60) + minute) * 0.5;

  hourHand.style.transform = `rotate(${hour + 90}deg)`;
  minHand.style.transform = `rotate(${minute + 90}deg)`;
  secHand.style.transform = `rotate(${second + 90}deg)`;
  // ${value=90} because, in css I used the transform value 
  // -90 deg to set postion to 12 so
}


btn.addEventListener("click", changeTime)

function changeTime2(){

  let h1 = hourInt.value;
  let m1 = minInt.value;
  let s1 = secInt.value;

  let second2 = s1 * 6;
  let minute2 = m1 * 6;
  let hour2 = ((h1 * 60) + minute2) * 0.5;

  hourHand.style.transform = `rotate(${hour2 + 90}deg)`;
  minHand.style.transform = `rotate(${minute2 + 90}deg)`;
  secHand.style.transform = `rotate(${second2 + 90}deg)`;
  
  hourInt.value = "";
  minInt.value = "";
  secInt.value = "";
  
}

hourInt.addEventListener("change", ()=>{
  submit.disabled=false;
  cancel.disabled= false;
})
minInt.addEventListener("change", ()=>{
  submit.disabled=false;
  cancel.disabled= false;
})
secInt.addEventListener("change", ()=>{
  submit.disabled=false;
  cancel.disabled= false;
})

submit.addEventListener("click", ()=>{
  changeTime2();
  disable();
})

cancel.addEventListener("click", () => {
  hourInt.value = "";
  minInt.value = "";
  secInt.value = "";
  disable();
})