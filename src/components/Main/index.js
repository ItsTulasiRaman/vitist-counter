import React, { useState, useEffect } from 'react'
import '../../components/Main/style/style.css'
// import star1 from "../../assets/star1.svg"
import background from "../../assets/Rectangle.png"
// import star2 from "../../assets/star2.svg"
// import ellipse1 from "../../assets/ellipse1.webp"
// import ellipse2 from "../../assets/ellipse2.webp"

function Index() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    startTimer();
  });

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("March 25, 2023 14:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      // const days = Math.floor(distance / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      ).toString().padStart(2, '0');

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, '0');

      const seconds = Math.floor((distance % (60 * 1000)) / 1000).toString().padStart(2, '0');


      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  return (
    <>
      <img src={background} alt='background' className='background-image' />
      {/* <div className='ellipses flex items-center justify-between'>
        <div className='ell1'>
          <img src={ellipse2} alt='' className='ellipse1' />
        </div>
        <div className='ell2'>
          <img src={ellipse1} alt='' className='ellipse2' />
        </div>
      </div> */}
      {/* <div className="header-box flex items-center justify-center flex-col">
        <div className="header-tagline-box flex items-center justify-center gap-14">
          
        </div>

        
      </div> */}
      <div className='flex h-[100vh] justify-center flex-col content-center'>
<div className='flex justify-center text-gray-100/[.33] text-4xl'>VNEST (VIT Startup Incubation Centre), VIT Chennai Proudly presents</div>
<p className='text-white flex justify-center font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-900 to-orange-600' >VITISH - 2023</p>
      <div className="countdown-box">
        
        <div className="counter">
          
          <div className="counter-day">
            <p className='counter-day-number'>{timerHours}:</p>
            <p className='counter-day-text'>Hours</p>
          </div>
          <div className="counter-minute">
            <p className='counter-minute-number'>{timerMinutes}:</p>
            <p className='counter-minute-text'>Minutes</p>
          </div>
          <div className="counter-seconds">
            <p className='counter-seconds-number'>{timerSeconds}</p>
            <p className='counter-seconds-text'>Seconds</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Index