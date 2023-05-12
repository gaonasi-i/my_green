//체크 박스 속성의 이벤트 처리하기
let check = document.querySelector("#shippingInfo");

//체크 이벤트를 구현
check.addEventListener("click", checkBox);

let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

let shippingName = document.getElementById("shippingName");
let shippingTel= document.getElementById("shippingTel");
let shippingAddr= document.getElementById("shippingAddr");

function checkBox(){
    //체크시 기본 정보 값을 배송정보에 저장
    if(check.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
    //체크 해제시에 if(check.checked == fasle 입력상자 공백 초기화)
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}
