const calender_content = document.querySelector("#right_content2");
const calender_container = calender_content.querySelector(".calendar-container");
const calender_header = calender_content.querySelector(".calendar-header");
const WEEK_NUMER =7;
const WEEK_DAY = ['일','월','화','수','목','금','토']
let currentDate = new Date();

function clear_calendar(){
  
  const element = calender_container;
  while (element.firstChild) {
  element.removeChild(element.firstChild);
}
  let element2 = calender_header;
  while (element2.firstChild) {
    element2.removeChild(element2.firstChild);
}

}

function prevMonthHandler(event){
  clear_calendar();
  currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1,currentDate.getDate());
  draw_header(currentDate);
  draw_calendar(currentDate);
}
function nextMonthHandler(event){
  clear_calendar();
  currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,currentDate.getDate());
  draw_header(currentDate);
  draw_calendar(currentDate);
}

function getMonthData(day){
    thisYear =day.getFullYear();
    thisMonth = day.getMonth();
    thisDate =day.getDate();//일자
    thisDay  =day.getDay();//요일
    return {
    thisYear ,
    thisMonth ,
    thisDate ,//일자
    thisDay  ,//요일
    thisMonthFirstDate : new Date(thisYear,thisMonth,1),
    thisMonthLastDate : new Date(thisYear,thisMonth+1,0),
    
    };
}
function draw_header(data){
  const nowDate =data;
  //헤더 그리기
  const header = document.createElement("span");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  header.innerText =`${nowDate.getFullYear()}년 ${nowDate.getMonth()+1}월`;
  prevBtn.classList.add("prevBtn");
  nextBtn.classList.add("nextBtn");
  prevBtn.addEventListener("click",prevMonthHandler);
  nextBtn.addEventListener("click",nextMonthHandler);
  calender_header.appendChild(prevBtn);
  calender_header.appendChild(header);
  calender_header.appendChild(nextBtn);

}
function draw_calendar(data){
    const nowDate = getMonthData(data);
    const now =new Date();  
   
    const thisMonthFirstDate = nowDate.thisMonthFirstDate;
    const thisMonthLastDate = nowDate.thisMonthLastDate;
    const prevMonth = new Date(nowDate.thisYear,
                                nowDate.thisMonth,
                                0);
    const nextMonth = new Date(nowDate.thisYear,
                                nowDate.thisMonth+1,
                                1);
    let cellNumber = 0;
    for(let i=0;i<thisMonthFirstDate.getDay();i++){
      
      
      let div = document.createElement("div");
      div.classList.add("calendar-cell");
      if(i===0){
        div.classList.add("past-month");
        div.classList.add("sun");
        div.innerText=`${prevMonth.getDate()-thisMonthFirstDate.getDay()+i+1}`;
      }
      else if(i===6){
        div.classList.add("past-month");
        div.classList.add("sat");
        div.innerText=`${prevMonth.getDate()-thisMonthFirstDate.getDay()+i+1}`;
      }
      else{
        div.classList.add("past-month");
        div.innerText=`${prevMonth.getDate()-thisMonthFirstDate.getDay()+i+1}`;
      }
        calender_container.appendChild(div);

      cellNumber++;
      
    }
    for(let i=thisMonthFirstDate.getDate();i<=thisMonthLastDate.getDate();i++){
      
      
        let div = document.createElement("div");
        div.classList.add("calendar-cell");
        if(data.getDate()===i&&data.getFullYear()===now.getFullYear()&&data.getMonth()===now.getMonth()){
            div.classList.add("today");
            div.innerText=`${i}`;
        }else if(cellNumber%7===0){
          div.classList.add("sun");
          div.innerText=`${i}`;
        }
        else if(cellNumber%7===6){
          div.classList.add("sat");
          div.innerText=`${i}`;
        }else{
            div.innerText=`${i}`;
        }
       
          calender_container.appendChild(div);
  
        cellNumber++;
        
      }
      for(let i=nextMonth.getDate();cellNumber<42;i++){
      
       
        let div = document.createElement("div");
        div.classList.add("calendar-cell");
        if(cellNumber%7===0){
          div.classList.add("next-month");
          div.classList.add("sun");
          div.innerText=`${i}`;
        }
        else if(cellNumber%7===6){
          div.classList.add("next-month");
          div.classList.add("sat");
          div.innerText=`${i}`;
        }else{
            div.classList.add("next-month");
            div.innerText=`${i}`;
        }
       
          calender_container.appendChild(div);
  
        cellNumber++;
        
      }
      

        //cell그리기?
}

function init(){
    draw_header(new Date());
    draw_calendar(new Date());

}
init();