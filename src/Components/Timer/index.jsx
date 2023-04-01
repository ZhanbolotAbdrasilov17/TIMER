import React, { useState, useEffect } from 'react';




export const Timer = () => {

   const endDate = '13-05-2023 12:00'
   let Year = (`${endDate[6]}${endDate[7]}${endDate[8]}${endDate[9]}`)
   let Month = (`${endDate[3]}${endDate[4]}`)

   let Day = (`${endDate[0]}${endDate[1]}`)
   let Hours = (`${endDate[11]}${endDate[12]}`)
   let Minutes = (`${endDate[14]}${endDate[15]}`)
   let Seconds = 0

   const updEndDate = new Date(`${Year}-${Month}-${Day}T${Hours}:${Minutes}:00`)
   const DaysLeft = updEndDate - new Date()

   const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

   useEffect(() => {
      const countdownInterval = setInterval(() => {
        setRemainingTime(calculateTimeRemaining());
      }, 1000);
  
      return () => clearInterval(countdownInterval);
    }, [remainingTime]);

    function calculateTimeRemaining() {
      if (DaysLeft < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      const days = Math.floor(DaysLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((DaysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((DaysLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((DaysLeft % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }



   return (
      <>
         <div className="wall">
            <div className="title-t">big sale on lifetime plan</div>
            <div className="title-b">there is very little left</div>
            <div className="timer">
               <div className="days">
                  <div className="number-day">{remainingTime.days}</div>
                  <div className="word-day">days</div>
               </div>

               <div className="stolb">|</div>

               <div className="hours">
                  <div className="number-hour">{remainingTime.hours}</div>
                  <div className="word-hour">hours</div>
               </div>

               <div className="stolb">|</div>

               <div className="minutes">
                  <div className="number-minutes">{remainingTime.minutes}</div>
                  <div className="word-minutes">minutes</div>
               </div>

               <div className="stolb">|</div>

               <div className="seconds">
                  <div className="number-seconds">{remainingTime.seconds}</div>
                  <div className="word-seconds">seconds</div>
               </div>
            </div>
         </div>
      </>
   )
}

















