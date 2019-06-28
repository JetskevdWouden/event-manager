import { EVENT_FETCHED } from '../actions/events'

export default (initialState = null, action = {}) => {
    switch (action.type) {
        case EVENT_FETCHED:
            return {
                ...action.event
            }
        default:
            return initialState
    }
}