//Date 객체 생성
let today = new Date(); //현개일
let theDay = new Date("2023-1-1")//1월 1일

//지나온날 = 오늘 - 새해 첫날
let passedTime = today.getTime() - theDay.getTime();
console.log(passedTime + "ms");

passedTime = Math.round(passedTime/(24*60*60*1000));
document.getElementById("day").innerHTML = passedTime;
