document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
});

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");

const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tan = document.getElementById("buttg");
const cot = document.getElementById("butctg");

let first = document.getElementById("first");
let second = document.getElementById("second");
let va = document.getElementById("va");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

let res = 0;
let res2 = 0;


function basicCalculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    let res;

    switch (mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            break;
    }

    result1.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("*");
});

div.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("/");
});

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) ||0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num1 / num2;
            break;
    }
    result.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
});

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
});

function trigonom(trig) {
    const num = parseFloat(va.value) || 0;
    num_c = num*Math.PI/180;
    switch(trig) {
        case "cos":
            res2 = Math.cos(num_c);
            break;
        case "sin":
            res2 = Math.sin(num_c);
            break;
        case "tan":
            res2 = (num_c % Math.PI) === (Math.PI/2) ? "error" : (Math.tan(num_c));
            break;
        case "cot":
            res2 = (num_c % Math.PI) === 0 ? "error" : 1/(Math.tan(num_c));
            break;
    }

    if(res2 === "error"){
        result2.textContent = res2;
    }
    else {
    result2.textContent = res2.toFixed(2);
    }
}

cos.addEventListener("click", (event) => {
    event.preventDefault()
    trigonom("cos");
});

sin.addEventListener("click", (event) => {
    event.preventDefault()
    trigonom("sin");
});

tan.addEventListener("click", (event) => {
    event.preventDefault()
    trigonom("tan");
});

cot.addEventListener("click", (event) => {
    event.preventDefault()
    trigonom("cot");
});