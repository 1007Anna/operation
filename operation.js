const input01 = document.getElementById("input01");
const input02 = document.getElementById("input02");
const result = document.getElementById("result");
const btn = document.getElementById("button");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const dividedBy = document.getElementById("dividedBy");
const select = document.getElementById("select");

btn.addEventListener("click",function(){
    const num01 = +input01.value;
    const num02 = +input02.value;
    const addSum = num01 + num02;
    
    // const minusSum = num01 - num02;
    // const timesSum = num01 * num02;
    // const dividedBySum = num01 / num02;


    // input01.value = null;
    // input02.value = null;
    result.innerText = "計算結果：" + addSum;
    // result.innerText = "計算結果：" + minusSum;
    // result.innerText = "計算結果：" + timesSum;
    // result.innerText = "計算結果：" + dividedBySum;
    

    // console.log(typeof num01)
    // console.log(typeof num02)
    console.log(sum);

    

});

