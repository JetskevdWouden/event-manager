import { EVENT_FETCHED,UPDATE_EVENT_SUCCESS } from '../actions/events'

export default (initialState = null, action = {}) => {
    switch (action.type) {
        case EVENT_FETCHED:
            return {
                ...action.event
            }
        case UPDATE_EVENT_SUCCESS:
            return {
                ...action.event
            }
        default:
            return initialState
    }
}