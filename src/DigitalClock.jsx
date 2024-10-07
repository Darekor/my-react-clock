import React,{useState,useEffect} from "react"

function DigitalClock(){

    const [time, setTime] = useState(new Date())
    const [meridiem, setMeridiem] = useState(false)


    useEffect(()=>{
        setInterval(()=>setTime(new Date),1000);
    },[])

    function currentTime(){        
        return(
            <span>{!meridiem ? padNumber(time.getHours()): time.getHours()!=12 ? padNumber(time.getHours()%12):"12"}
                 :{padNumber(time.getMinutes())}
                 :{padNumber(time.getSeconds())}
                  {meridiem ? ((time.getHours()>=12 && time.getHours()<24) ?" PM":" AM"):""}
            </span>
        )
    }

    function padNumber(number){
        return (number<10 ? "0":"")+number;
    }

    function handleClick(){
        setMeridiem(m=>!m)
    }

    return(
        <div className="clock-container"><p className="time-container"><span>{currentTime()}</span><span onClick={handleClick} className="meridiem-icon">{meridiem? "🍔" : "🌍"}</span></p></div>
    )
}

export default DigitalClock