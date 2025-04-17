import { useState, useRef, use } from "react";
import "./Clock.css";

function Clock () {
    const [time , setTime] = useState(0);
    const [timerOn , setTimerOn] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!timerOn) {
            setTimerOn(true)
        }
    }

}

