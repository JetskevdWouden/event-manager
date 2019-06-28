import request from 'superagent';

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCES';
export const EVENT_FETCHED = 'EVENT_FETCHED';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';

const baseUrl = 'http://localhost:4000';

const eventsFetched = (events) => ({
    type: EVENTS_FETCHED,
    events
});

const eventCreateSuccess = (event) => ({
    type: EVENT_CREATE_SUCCESS,
    event
});

const eventFetched = (event) => ({
    type: EVENT_FETCHED,
    event
})

const deleteEventSuccess = (eventId) => ({
    type: DELETE_EVENT_SUCCESS,
    eventId
})

export const loadEvents = () => (dispatch, getState) => {
    //check if state already contains event - to not fetch again
    if (getState().events)
        return
    // a GET /events request
    request(`${baseUrl}/events`)
        .then(response => {
            //dispatch an EVENTS_FETCHED action that contains the events
            dispatch(eventsFetched(response.body))
        })
        .catch(console.error)
}

export const createEvent = (data) => dispatch => {
    request
        .post(`${baseUrl}/events`)
        .send(data)
        .then(response => {
            dispatch(eventCreateSuccess(response.body))
        })
        .catch(console.error)
}

export const loadEvent = (props) => (dispatch, getState) => {
    //console.log("GETSTATE", getState().events)
    const id = props
    //console.log("WHERE IS MY ID??", props)
    request(`${baseUrl}/events/${id}`)
        .then(response => {
            //console.log("THIS BODY RES", response.body)
            const event = response.body;
            //console.log("EVENT SENT TO EVENTFETCHED", event)
            dispatch(eventFetched(event))
        })
        .catch(console.error)
}

export const deleteEvent = (props) => (dispatch, getState) => {
    //console.log("WHAT ARE MY PROPS?", props)
    //console.log("IS THIS MY ID?", props.id)
    const eventId = props
    console.log("THIS IS THE STATE AT THE MO", getState())
    dispatch(deleteEventSuccess(eventId))
}