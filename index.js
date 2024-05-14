document.querySelector(".dropdown").addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.toggle("shw-menu");
})

document.querySelector(".toggle").addEventListener("click", function (){
    document.querySelector(".menu-box").classList.toggle("active");
})

let count = 0;

let CountData = setInterval(() => {
    document.getElementById('welbox-txt1').innerText = ++count;
    if(count >=500){
    clearInterval(CountData);
    }
},100)

let count1 = 0;

let CountData1 = setInterval(() => {
    document.getElementById('welbox-txt2').innerText = ++count1;
    if(count1 >=89){
    clearInterval(CountData1);
    }
},400)

let count2 = 0;

let CountData2 = setInterval(() => {
    document.getElementById('welbox-txt3').innerText = ++count2;
    if(count2 >=13){
    clearInterval(CountData2);
    }
},400)

let count3 = 0;

let CountData3 = setInterval(() => {
    document.getElementById('welbox-txt4').innerText = ++count3;
    if(count3 >=40){
    clearInterval(CountData3);
    }
},400)


