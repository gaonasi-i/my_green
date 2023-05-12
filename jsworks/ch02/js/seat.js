        //입장개개 수에 따른 좌석의 줄(행)수 계산
        let customer = parseInt(prompt("입장객은 몇명 인가요?")); //입장객 수
        let colNum = parseInt(prompt("한 줄에 몇명씩 앉나요?")); //열의 수
        let rowNum; //행(줄)의 수


        if(customer == null || colNum == null 
            || isNaN(colNum)|| isNaN(rowNum)){ 
            document.write("<p>입력이 취소 되었습니다.</p>")
        }
        else{
            if(customer % colNum == 0){
            rowNum = customer / colNum;
            }
        else{
            rowNum = parseInt(customer / colNum) + 1;
            }
            }
            document.write("<table>")

            for(var i=0; i<rowNum; i++){
                document.write("<tr>")
                for(var j=1; j<=colNum; j++){
                    var seathNum =colNum*i+j;
                    if(seathNum > customer){
                        break;
                    }
                    document.write("<td>좌석" + seathNum + "</td>" );
                }
                document.write("<tr>")
            }
            document.write("</table>")
        //document.write(rowNum + "개의 줄이 필요합니다.")

