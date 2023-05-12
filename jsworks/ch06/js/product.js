//이미지 바꾸기
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");
console.log(smallPics.length);

//smallPics[0].onclick = showBig;


//클릭 이벤트 발생
for(let i=0; i<smallPics.length; i++){
    //addEventListener() 이벤트 처리기
    smallPics[i].addEventListener("mouseover", function(){
        console.log(this.src);
        bigPic.setAttribute("src", this.src);
    });
}

//상세설명 보기
let wiew = document.getElementById("view");
let detail = document.getElementById("detail");

//토글 프로그램
let sw = true;

view.addEventListener("click", function(){
    if(sw){
        detail.style.display = "block";
        view.innerText = "상세 설명 닫기";
        sw = false;
    }
    else{
        detail.style.display = "none";
        view.innerText = "상세 설명 보기";
        sw = true;
    }
})