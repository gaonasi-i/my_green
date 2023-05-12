//이미지 바꾸기
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");
console.log(smallPics.length);

//smallPics[0].onclick = showBig;


//클릭 이벤트 발생
for(let i=0; i<smallPics.length; i++){
    //smallPics[i].onclick = showBig;
    //addEventListener() 이벤트 처리기
    smallPics[i].addEventListener("mouseover", function(){
        console.log(this.src);
        bigPic.setAttribute("src", this.src);
    });
}

/*function showBig(){
    console.log(this.src); //클릭한 대상.(자기 자신)
    bigPic.setAttribute("src", this.src);
}*/