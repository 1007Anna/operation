const input01 = document.getElementById("input01");
const input02 = document.getElementById("input02");
const result = document.getElementById("result");
const btn = document.getElementById("button");
const add = document.getElementById("add");
const select = document.getElementById("select");

btn.addEventListener("click",function(){
    const num01 = +input01.value;
    const num02 = +input02.value;
    const sum = num01 + num02;
    // input01.value = null;
    // input02.value = null;
    result.innerText = sum;
    

    // console.log(typeof num01)
    // console.log(typeof num02)
    console.log(sum);

    

});

