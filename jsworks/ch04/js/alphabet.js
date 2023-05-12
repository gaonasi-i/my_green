//배열에 알파벳 대문자 저장

let alphabet = new Array(26);
let char = 'A';

//아스킷 코드를 찾는 함수 - 객체.charCodeAt
char = char.charCodeAt(0); //0번 인덱스
console.log(char); //code 값 - 65 (ASCII-아스킷 코드)


/*char++; // char = char + 1
console.log(char); //66

//문자로 출력하는 함수 : string fromcharCode(ch)
console.log(String.fromCharCode(char));*/


//배열의 저장(입력)
/*
    alphabet[0] = ch
    alphabet[1] = ch+1
    alphabet[2] = ch+2
*/
for(var i=0; i<alphabet.length; i++){
    alphabet[i] = char;
    char++;
}


//출력
for(var i=0; i<alphabet.length; i++){
    document.write(String.fromCharCode(alphabet[i]) + " ");
}
for(var i=0; i<alphabet.length; i++){
    document.write(alphabet[i] + ", " +String.fromCharCode(alphabet[i]) + "<br>");
}

