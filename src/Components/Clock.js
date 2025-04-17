import { useState, useRef, use } from "react";
import "./Clock.css";

function Clock () {
    const [time , setTime] = useState(0);
    const [timerOn , setTimerOn] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!timerOn) {
            setTimerOn(true)
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setTimerOn(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setTimerOn(false);
        setTime(0);
    };

    const formatTime = () => {
        const seconds = time % 60;
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="stopwatch-cont">
            <h1 className="time-disp">{formatTime()}</h1>
            <div className="button">
                <button  onClick={startTimer} className="start">START</button>
                <button  onClick={stopTimer} className="stop">STOP</button>
                <button  onClick={resetTimer} className="start">START</button>
            </div>
        </div>
    )

}

