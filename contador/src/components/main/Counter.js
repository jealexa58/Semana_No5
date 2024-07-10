import React, { useState } from "react";

export default function Counter(props){
    const [event, setEvent] = useState(0);

    const incrementEvent = () => setEvent(event + 1);
    const decrementEvent = () => setEvent(event - 1);
    const resetEvent = () => setEvent(event);

    return (
        <div className="container">
            
        </div>
    )
}