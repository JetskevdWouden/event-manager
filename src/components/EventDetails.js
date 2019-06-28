import React from 'react';

export default function EventDetails(props) {
    //console.log("WHAT ARE MY PROPS?", props)
    //console.log("IS THIS MY EVENT?", props.event)
    const event = props.event                           //contains(name, date, description)
    //const onDelete = props.onDelete
    return (
        <div className="eventDetails">
            <h1>{event.name}</h1>
            <i>{event.date}</i>
            <p>{event.description}</p>
            <br/>
            <button onClick={() => props.onDelete(event)}>DELETE <strong>THIS</strong> EVENT</button>
        </div>
    )
}