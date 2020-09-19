//Question 1

const button1 = document.querySelector("#bg");

button1.onclick = function() {
    document.body.style.background = "green";
}


//Question 2


const togglee = document.querySelector(".togglee");
const button2 = document.querySelector(".toggler");


function toggleMe() {
    togglee.classList.toggle("extra");
}
 button2.onclick = toggleMe;


// Question 3

const dropDown = document.querySelector("select");
const pContent = document.querySelector(".paragraphs-container");

dropDown.onchange = function(){
    const dropdownValue = this.value;

    pContent.innerHTML = "";

    for(let i=1; i <= dropdownValue; i++){
        pContent.innerHTML += `<p class="content"></p>`;
    }

}


//Question 4

const input = document.querySelector("input");
const charCount = document.querySelector(".char-count");

input.onkeyup = function(){

const textlenght = event.target.value.length;

charCount.innerHTML = "Character count:" + " " + textlenght;


}

//Question 5

const body = document.querySelector("body");

 function highlights (){
    const bodyScroll = window.scrollY;
    if(bodyScroll > 35){
        document.body.classList.add("highlight");
    }else{
           document.body.classList.remove("highlight");
       } 
    }

window.onscroll = highlights; 