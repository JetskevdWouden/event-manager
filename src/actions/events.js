import request from 'superagent';

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCES';
export const EVENT_FETCHED = 'EVENT_FETCHED';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';

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

const updateEventSuccess = (eventId, newData) => ({
    type: UPDATE_EVENT_SUCCESS,
    eventId,
    newData
})

export const loadEvents = () => (dispatch, getState) => {
    if (getState().events)
        return
    const jwt = getState().currentUser
    request(`${baseUrl}/events`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            dispatch(eventsFetched(response.body))
        })
        .catch(console.error)
}

export const createEvent = (data) => (dispatch, getState) => {
    const jwt = getState().currentUser

    request
        .post(`${baseUrl}/events`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(eventCreateSuccess(response.body))
        })
        .catch(console.error)
}

export const loadEvent = (props) => (dispatch, getState) => {
    const eventId = props
    const reduxState = getState().event
    const jwt = getState().currentUser

    if (reduxState && reduxState.id === eventId) return

    request(`${baseUrl}/events/${eventId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            const event = response.body;
            dispatch(eventFetched(event))
        })
        .catch(console.error)
}

export const deleteEvent = (props) => (dispatch, getState) => {
    const eventId = props
    const jwt = getState().currentUser

    request
        .delete(`${baseUrl}/events/${eventId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            dispatch(deleteEventSuccess(eventId))
        })
        .catch(console.error);
}

export const updateEvent = (eventId, data) => (dispatch, getState) => {
    const jwt = getState().currentUser

    request
        .patch(`${baseUrl}/events/${eventId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            const newData = response.body
            dispatch(updateEventSuccess(newData));
        })
        .catch(console.error)
}