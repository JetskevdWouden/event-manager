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
            return (
                reduxState.filter(event => {
                    if (event.id !== action.eventId) {
                        return true;
                    }
                })
            )
        default:
            return reduxState
    }
}