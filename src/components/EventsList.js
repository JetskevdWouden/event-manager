import React from 'react';
import { Link } from 'react-router-dom'

//link to /events/:id --> ${event.id} correct?
function renderEvent(event) {
    return (
        <li key={event.id}> 
            <Link to={`/events/${event.id}`}>{event.name}</Link>     
        </li>
    )
}

export default function EventList(props) {
    const events = props.events;
    // console.log("PROPS", events)
    return (
        <div className="listOfEvents">
            <h3>Events</h3>
            {
                events &&
                <ul>
                    {
                        events.map(renderEvent)
                    }
                </ul>

            }
        </div>
    )
}