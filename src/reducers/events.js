import {EVENTS_FETCHED, EVENT_CREATE_SUCCESS, DELETE_EVENT_SUCCESS} from '../actions/events'

const initialState = null;

export default (reduxState = initialState, action = {}) => {
    switch (action.type) {
        case EVENTS_FETCHED:
            return [
                ...action.events
            ]
        case EVENT_CREATE_SUCCESS:
            return [
                ...reduxState, 
                action.event
            ]
        case DELETE_EVENT_SUCCESS:
            //removes => filters event from events array aka initialState
            //console.log("IM THE EVENTS STATE", reduxState)
            //console.log("I WANT TO GO", action.eventId)
            return (
                reduxState = reduxState.filter(event => {
                    if (event.id !== action.eventId) {
                        //console.log("IM AN EVENT ID", event.id)
                        return true;
                    }
                })
            )
        default:
            return reduxState
    }
}