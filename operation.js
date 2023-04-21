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

    // parseInt()用於解析字符串並返回整數
    const num01 = parseInt(input01.value);
    const num02 = +input02.value;
    
    console.log("select 的 value");
    console.log(select.value)
    
    
    if(select.value == "+"){
        const addSum = num01 + num02;
        result.innerText = "計算結果：" + addSum;
    }

    if(select.value == "-"){
        const minusSum = num01 - num02;
        result.innerText = "計算結果：" + minusSum;
    }

    if(select.value == "x"){
        const timesSum = num01 * num02;
        result.innerText = "計算結果：" + timesSum;
    }

    if(select.value == "%"){
        const dividedBySum = num01 / num02;
        result.innerText = "計算結果：" + dividedBySum;
    }
    

  
    console.log(sum);

    

});

