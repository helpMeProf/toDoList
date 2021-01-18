const right_content=document.querySelectorAll(".right_content");
const right_box=document.querySelector(".right_box");
const nextBtn = right_box.querySelector("#nextBtn");
let currentContent;
const WHOLE_CONTENTS_NUMBER=2;

function nextClickHandler(){
    let currentContent
    right_content.forEach(function(content,index){
        if(content.classList.contains("showing")){
            currentContent=index;
        }
    });
    right_content[currentContent].classList.remove("showing");
    const nextContent=(currentContent+1)%WHOLE_CONTENTS_NUMBER;
    right_content[nextContent].classList.add("showing");
    
    
}
function init(){

    nextBtn.addEventListener("click",nextClickHandler);
}

init();