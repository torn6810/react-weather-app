import React from "react";

export default function FormattedDate(props){
    let now=new Date();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[props.date.getDay()];
    let currentHour=[now.getHours()];
    //let hours=props.date.getHours();
    //let minutes=props.date.getMinutes();
    let minutes=[now.getMinutes()];
    if (minutes<10){
        minutes=`0${minutes}`;
      }
    if (currentHour<10){
        currentHour=`0${currentHour}`;
      }  

    return(
        <div className="FormattedDate">
            <h2>
            {day} {currentHour}:{minutes}
            </h2>
        </div>
    )
}