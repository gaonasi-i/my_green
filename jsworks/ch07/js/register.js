
window.onload = function(){
// 유효성 검사
let id = document.getElementById("user-id");
let pw1 = document.getElementById("user-pw1");
let pw2 = document.getElementById("user-pw2");

//onchange - 포커스가 입력상자를 벗어났을때 작동
id.onchange = checkiId;
pw1.onchange = checkiPw;
pw2.onchange = comparePw;

function checkiId(){
    if(id.value.length < 4 || id.value.length > 12){
        alert("4~15 자리로 입력해주세요");
        id.select(); //현재 텍스트 범위 선택 (지정)
    } 
}
function checkiPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자 이상입니다");
        pw1.select();
    }
}
function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호를 동일하게 입력하세요");
        pw2.select();
    }
}
}