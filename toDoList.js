//hello world;
const toDoList=document.querySelector(".js-toDoList");
const listForm = document.querySelector(".js-listForm");
const listInput = listForm.querySelector("input");
const TO_DO_LIST = "toDoList";
let toDos = [];

function listSubmitHandler(event){
    event.preventDefault();//막고
    const text = listInput.value;
    showingList(text,toDos.length);//리스트에 추가하고
    listInput.value="";
    //toDos를 업데이트 해야지
    
}

function checkHandler(event){
    
    const btn =event.target;
    const parent = btn.parentNode;
    const index=0;
    for(let i=0;i<toDoList.length;i++){
        if(toDoList.childNodes[i]==parent){
            index=i;
            break;
        }
    }
    toDoList.removeChild(parent);
    toDos.splice(index,1);
    console.log(toDos);
    saveData();


}

function saveData(){
    localStorage.setItem(TO_DO_LIST,JSON.stringify(toDos));
}

function showingList(content){
    const li = document.createElement("li");
    const check = document.createElement("button");
    const span = document.createElement("span");
    
    check.classList.add("checkBtn")
    span.innerText=content;
    check.addEventListener("click",checkHandler);
    li.appendChild(check);
    li.appendChild(span);
   

    toDoList.appendChild(li);
    const dataObj ={
        "text" : content,
    }
    toDos.push(dataObj);
    saveData();
}

function loadList(){
    const data = localStorage.getItem(TO_DO_LIST);
    
    if(data !==null){
        //모든 리스트 출력
        const dataList = JSON.parse(data);
        dataList.forEach((element,index) => {
            showingList(element.text,index);
        });
       toDos=dataList;
       console.log(data);
    }else{

    }
}

function init(){
    //저장되어있던 리스트를 가져와야함
    loadList();
    listForm.addEventListener("submit",listSubmitHandler);
}

init();