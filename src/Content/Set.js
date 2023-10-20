import React, { useState } from 'react';
const Set = () => {
    const [time, settime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
    const [status, setstatus] = useState(0);
    const [interv,setinterv] = useState(0)
    const start = () => {
        setstatus(1)
        run();
        setinterv(setInterval(run, 10))
    }
    var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;
    const run = () => {
        if (updateM === 60) {
            updateH++;
            updateM = 0;
        }
        if (updateS === 60) {
            updateM++;
            updateS = 0;
        }
        if (updateMs === 100) {
            updateS++;
            updateMs = 0;
        }
        updateMs++;
        return settime({ ms: updateMs, s: updateS, m: updateM, h: updateH })
    }
    const stop = ()=>
    {
        setstatus(2)
        clearInterval(interv)
    }
    const reset = ()=>
    {    
        setstatus(0)
        settime({ ms: 0, s: 0, m: 0, h: 0})
    }
    return (
        <>
            <p>
                {time.h >= 10 ? time.h : "0" + time.h}&nbsp;:&nbsp;
                {time.m >= 10 ? time.m : "0" + time.m}&nbsp;:&nbsp;
                {time.s >= 10 ? time.s : "0" + time.s}&nbsp;:&nbsp;
                {time.ms >= 10 ? time.ms : "0" + time.ms}&nbsp;&nbsp;
                <br />
                {(status === 0)?  <button onClick={start} type="submit">start</button>:""}
                {
                    (status === 1)?
                    <div><button onClick={stop} type="submit">Stop</button><button type="submit">Reset</button> 
                    </div>:""}
                    {
                    (status === 2)?
                    <div><button onClick={start} type="submit">resume</button><button type="submit" onClick={reset}>Reset</button> 
                    </div>:""}  
            </p>
        </>
    )
}
export default Set;