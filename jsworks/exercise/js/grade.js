let score = prompt("당신의 점수를 입력하세요.");
score = parseInt(score);
let grade = "";

if(score >=90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}        
else if(score >= 70 && score < 80){
    grade = "C";
}        
else if(score >= 60 && score < 70){
    grade = "D";
}        
else{
    grade = "F";
}
document.write("당신의 학점은<span> " + grade + " </span>입니다.") 