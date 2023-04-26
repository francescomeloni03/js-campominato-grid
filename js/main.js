const contentitore = document.getElementById("container");


const btn = document.querySelector("button");


 btn.addEventListener("click", function ()  {
    for ( let contatore = 1; contatore < 101; contatore++){
        // console.log(contatore);
        contentitore.innerHTML += `<div class="box">${contatore}</div>`;
    }
 });

 

 const box = document.querySelector("box");

 box.addEventListener("click", function(){
    contentitore.innerHTML += `<div class="box-azzurro">${contatore}</div>`;


 });







 


    











