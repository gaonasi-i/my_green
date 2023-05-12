let n1 = prompt("첫 번째 수 입력 : ");
let n2 = prompt("두 번째 수 입력 : ");

let sun_v;


//실수로 변환
sun_v = parseInt(n1) + parseInt(n2);


//소수 자리수 설정 함수 - 객체, toFixed(2)
document.write("두수의 합 : " + sun_v.toFixed(2));