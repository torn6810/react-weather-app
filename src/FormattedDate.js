import React from "react";

export default function FormattedDate(props){
    let now=new Date();
    let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day=days[props.date.getDay()];
    let month=months[now.getMonth()];
    let date=[now.getDate()];
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
            {day}, {month} {date} {currentHour}:{minutes} 
            </h2>
        </div>
    )
}