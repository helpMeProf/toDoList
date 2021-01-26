const calender_content = document.querySelector("#right_content2");
const calender_container = calender_content.querySelector(".calendar-container");
const WEEK_NUMER =7;
const WEEK_DAY = ['일','월','화','수','목','금','토']
let calendar = [];


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
function draw_calendar(data){
    const nowDate = getMonthData(data);
    
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
        div.innerText=`${WEEK_DAY[i]} ${prevMonth.getDate()-thisMonthFirstDate.getDay()+i+1}`;
      }
      else if(i===6){
        div.classList.add("past-month");
        div.classList.add("sat");
        div.innerText=`${WEEK_DAY[i]} ${prevMonth.getDate()-thisMonthFirstDate.getDay()+i+1}`;
      }
      else{
        div.classList.add("past-month");
        div.innerText=`${WEEK_DAY[i]} ${prevMonth.getDate()-thisMonthFirstDate.getDay()+i+1}`;
      }
        calender_container.appendChild(div);

      cellNumber++;
      
    }
    for(let i=thisMonthFirstDate.getDate();i<=thisMonthLastDate.getDate();i++){
      
      
        let div = document.createElement("div");
        div.classList.add("calendar-cell");
        if(data.getDate()===i){
            div.classList.add("today");
            div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
        }else if(cellNumber%7===0){
          div.classList.add("sun");
          div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
        }
        else if(cellNumber%7===6){
          div.classList.add("sat");
          div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
        }else{
            div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
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
          div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
        }
        else if(cellNumber%7===6){
          div.classList.add("next-month");
          div.classList.add("sat");
          div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
        }else{
            div.classList.add("next-month");
            div.innerText=`${WEEK_DAY[cellNumber%7]} ${i}`;
        }
       
          calender_container.appendChild(div);
  
        cellNumber++;
        
      }
      

        //cell그리기?
}

function init(){
    draw_calendar(new Date());

}
init();