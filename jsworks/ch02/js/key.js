//'y' 또는 대문자 'Y' 키를 누르면 - 계속 반복
//'n' 또는 대문자 'N' 키를 누르면 - 반복 중단
//그 이외의 키를 누르면 - 키를 잘못눌렀습니다.

while(true){
    let key = prompt("계속 반복 할까요?", 'y/n');

    if(key == 'y' || key == 'Y'){
        alert("계속 반복합니다.");
    }
    else if(key == 'n' || key == 'N'){
        alert("반복을 중단합니다.");
        break;
    }
    else{
        alert("키를 잘못 눌렀습니다.");
    }
}
document.write("프로그램을 종료합니다.");