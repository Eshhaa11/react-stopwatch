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
    }

}

