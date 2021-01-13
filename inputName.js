const nameForm = document.querySelector(".js-inputName");
const nameInput = nameForm.querySelector("input");
const showText = document.querySelector(".js-showUserName");
const USER_NAME = "userData"
const SHOWING_CN = "showing" //showing currentName

function saveName(name){
    localStorage.setItem(USER_NAME,name);
}

function submitNameHandler(event){
    event.preventDefault();
    const nameText = nameInput.value;
    showName(nameText);
    saveName(nameText);
    
}

function aksForName(){
    nameForm.classList.add(SHOWING_CN);
    nameForm.addEventListener("submit",submitNameHandler);
}

function showName(text){
    nameForm.classList.remove(SHOWING_CN); //이름 입력 form을 가리기 위해서
    showText.classList.add(SHOWING_CN); // 이제 현재 유저 이름 보여주기
    showText.innerText=`hello ${text}`
}

function loadUserName(){
    const userName = localStorage.getItem(USER_NAME);
    if(userName ===null){
        //처음 사용자라면 이름을 입력해주세요 
        aksForName();
        console.log("aksForName");
    }else {
        // 저장된 데이터를 가져옴
        showName(userName);
        console.log("showName");
    }
}

function init(){
   loadUserName();
}
init();