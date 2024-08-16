function showTime(){
    const today=new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    document.getElementById('myClock').innerHTML= hour + ":" + minute + ":" + second;
    minute=checkTime(minute);
    second=checkTime(second);
    setTimeout(showTime, 1000);
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


function showDate(){
const date = new Date();
let day = date.getDay();

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
document.getElementById('myDate').innerHTML=days[day];
}

let username = prompt("Lütfen adınızı girin");
let greeting=document.querySelector("#myName");
greeting.innerHTML= username;