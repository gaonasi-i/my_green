//시계
window.onload = function(){
setInterval(setWatch, 1000);
function setWatch(){
    const date = new Date();
    let now = date.toLocaleTimeString(); //시간
    document.getElementById("demo").innerHTML = now;
}

//배경 이미지 Change
let picture = ["./images/header1.jpg", "./images/header2.jpg",
"./images/header3.jpg"];

let imgIdx = 0;

showPicture();

function showPicture(){
    let img = document.getElementById("pic");
    img.src = picture[imgIdx];
    imgIdx++;

    if(imgIdx == picture.length){
        imgIdx = 0;
    }
    setTimeout(showPicture, 2000); //콜백 함수
}
}