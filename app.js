let body = document.querySelector("body");
body.style.backgroundColor = "gray";

let head = document.querySelector("#head");
let para = document.querySelector("#para");
let container = document.querySelector("#container");

function change(){
    head.innerHTML = "Hello faizi";
    para.innerHTML = `My name is Faizi and I am a web developer and I am excited to Learn data Science`;
    container.className.add("some");
}