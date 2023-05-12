//아이템 리스트
let itemList =[];
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

//아이템 추가함수
function addList(){
    //itemList에 push 함수를 사용하여 입력
    let item = document.getElementById("item").value;
    itemList.push(item);
    document.getElementById("item").value = "";
    document.getElementById("item").focus();
    showList();
    //addList 닫기
}
function showList(){
    //document.getElementById("itemList").innerHTML =itemList[0];
    let list = "<ul>";
    for(let i=0; i<itemList.length; i++){
        //document.getElementById("itemList").innerHTML =itemList[i];
        list += "<li>" + itemList[i] +"<span class='close' id="+ i +">X</span></li>"
    }
    list +="</ul>"
    document.getElementById("itemList").innerHTML =list;

    //아이템 삭제
    //'X'를 선택
    let removeList =  document.querySelectorAll(".close");

    for(let i=0; i<removeList.length; i++){
        removeList[i].addEventListener("click", remove);
    }

    function remove(){
        console.log(this); //클릭 이벤트가 일어난 대상
        let id = this.getAttribute("id"); //id 값 가져옴
        itemList.splice(id, 1);

        //목록보기
        showList();
    }//remove 닫기
}//showList 닫기