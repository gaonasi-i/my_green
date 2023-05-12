function addContents(){
    let newP = document.createElement("p");
    let text = document.createTextNode("은은하고 다채로운 꽃향");
    newP.appendChild(text); //<p>은은하고 다채로운 꽃향</p>
    //div태그 안에 p태그 포함

    document.getElementById("info").appendChild(newP);
    let newImg = document.createElement("img");
    let src = document.createAttribute("src");

    //src속성
    src.value = "imges/coffee-blue.jpg";
    newImg.setAttributeNode(src);

    //alt속성
    let alt = document.createAttribute("alt")
    alt.value = "커피이미지";
    newImg.setAttributeNode(alt);

    //div태그 안에 img태그 포함
    document.getElementById("info").appendChild(newImg);
}
