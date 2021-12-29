var grade = "";
var prize = "";
var code = 3;
switch(code){
    case 1:
        grade = "一等奖";
        prize = "华为手机";
        break;
    case 2:
        grade = "二等奖";
        prize = "光波炉";
        break;
    case 3:
        grade = "三等奖";
        prize = "电饭煲";
        break;
    default:
        grade = "安慰奖";
        prize = "16G-U盘";
        break;
}
document.write("该员工获得了" + grade + "," + "奖品是" + prize);
document.write("<br>");
var i = 1;
while(i <= 10){
    document.write(i + "<br>");
    i++;
}

var distance = 400;
var count = 0;
while(distance <= 5000){
    count++;
    distance = (count + 1)*400;
}
document.write("5000メートルを走るには" + count + "周です");

