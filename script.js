// document . write ("Hello World")
// alert("Hello world")
// alert("สวัสดีค่ะ")
// console.log("ทดสอบระบบสำเร็จ")

// var Fullname = "Panatda"
// const number = 20;

// document . write(Fullname);
// document . write(number);
// let result = "123abc"
// let total = parseInt(result);

// document.write(total);

// let Num = 123;
// let result = Num.toString();
// document.write(result);
// let total = typeof(result);
// document.write(total);

// let num = 112312121;
// let Text = typeof(num);
// document.write(Text);
// document.write(typeof(num));

//ตัดเกรดคะแนน
//โดยถ้าคะแนนมากกว่า 100 ให้ขึ้นคำว่า สอบผ่าน
//แต่ถ้าน้อยกว่า ให้ขึ้นคำว่า สอบตก ไปสอบใหม่นะ

// var score = 100;
// if (score >= 100){
//     document.write("สอบผ่าน");   
// } else {
//     document.write("สอบตก ไปสอบใหม่นะ");
// }

// var degree = 9;
// if (degree >=30){
//     document.writeln("ร้อนมากครับ");
// } else if (degree >= 10){
//     document.writeln("เริ่มหนาว");
// } else{
//     document.write("น้ำร้อนเย็นหมดแล้ว");
// }

//แปลงจากเลขเป็น วัน
//โดยให้เริ่มที่เลข1 เป็นวันจันทร์ แล้วไล่ไปจนถึงวันอาทิตย์
// var day = 8;
// switch (day){
//     case 1 :
//         document.write("วันจันทร์");
//     break;
//       case 2 :
//         document.write("วันอังคาร");
//     break;
//       case 3 :
//         document.write("วันพุธ");
//     break;
//       case 4:
//         document.write("วันพฤหัสบดี");
//     break;
//       case 5 :
//         document.write("วันศุกร์");
//     break;
//       case 6 :
//         document.write("วันเสาร์");
//     break;
//       case 7 :
//         document.write("วันอาทิตย์");
//     break;
//     default :
//     document.write("ไม่ตรงกับเงื่อนไขใดๆ");
//     break;
// }
// i = 0 > คือ กำหนดค่าที่จะให้นับเริ่มต้น
// i < 4 คือ ตั้งค่าให้มีการทำซ้ำ 4 ครั้ง
// i = i + 1 คือ เพิ่มค่าตัวจำนวนนับทีละ1

// for (i = 0 ; i < 4 ; i = i + 1 ){
// document.writeln(" สวัสดี ");
// document.writeln(i);
// }

// for (i = 1 ; i < 14 ; i = i + 1 ){
// document.writeln(" อยากกลับบ้าน ");
// document.writeln(i);
// }
// function showmessage(){
//     alert("ยินดีต้อนรับ"); 
// }
// showmessage();  //การเรียกใช้งานฟังค์ชัน

// function cal(number){
//     return document.writeln (number *2);
// }
// cal(20); 

// function showname(realname,surname){
//     return document.writeln(realname + " " + surname);
// }
// showname("ปาณัทดา","อาปะโม");


function changecolor(){
    let name = document.getElementById("Test-1");
    name.style.color = "red";
    name.style.backgroundColor = "yellow" 
    
}
function Test(){
    let result = document.querySelector(".Test-2");
    result.setAttribute("class","light")
}

let mode = document.querySelector(".mode");
function drakmode(){
   
    mode.setAttribute("class","drak");
}

function lightmode(){
    mode.setAttribute("class","light");
}



function changetext(){
    let text = document.getElementById("change-text").value;
    let result = document.getElementById("showtext");
    result.innerHTML = text;

}

