let picture = ["./images/페코1.jpg", "./images/페코2.jpg"];

let imgIdx = 0;

showPicture();

function showPicture(){
    let img = document.getElementById("peco");
    img.src = picture[imgIdx];
    imgIdx++;

    if(imgIdx == picture.length){
        imgIdx = 0;
    }
    setTimeout(showPicture, 2000);
}