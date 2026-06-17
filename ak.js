const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");
display.style.color = "white";
// display.style.fontSize = "30px";
// display.style.fontWeight = "bold";
display.style.textAlign = "right";
display.style.paddingRight = "10px";

let num1="";
let num2="";
let arr=[]
buttons.addEventListener("click",function(p){
   
    console.log(p.target.innerHTML);
    if (p.target.id === "res") {
        return; // "=" button par kuch mat karo
    }
   
    console.log(p.target.innerHTML);
    display.value += p.target.innerHTML;
    arr.push(p.target.innerHTML);
    //  num1=display.value[0];
    //   num2=display.value[2];
    //    op=display.value[1];
    //    console.log("num1 hai",num1);
    //     console.log("num2 hai",num2);
    //      console.log("op hai",op);
   
  
});
console.log(arr);

let r=document.getElementById("res");
r.addEventListener("click",function(){
   let i=0;
   let a="";
   while (i<arr.length) {
    if(arr[i]!=='+' && 
    arr[i] !== "-" &&
    arr[i] !== "*" &&
    arr[i] !== "%"){
        num1+=arr[i];
        console.log("num1 hai",num1);
    }
    else {
        break; // operator mil gaya
    }
    i++;
}
let k=arr[i];
a=i+1;
    while (a<arr.length) {
   
   num2+=arr[a];
    console.log("num2",num2);
    a++;
}
// let n2=number(num2)
switch (k) {
    case "+":
        display.value = Number(num1) + Number(num2);
        break;

    case "-":
        display.value = Number(num1) - Number(num2);
        break;

    case "*":
        display.value = Number(num1) * Number(num2);
        break;

    case "%":
        display.value = Number(num1) % Number(num2);
        break;

    default:
        break;
}

});

let cut=document.getElementById("c");
cut.addEventListener("click",function(p){
  display.value="";
});