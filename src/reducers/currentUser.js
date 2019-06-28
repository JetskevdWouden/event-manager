import {LOGIN_SUCCESS} from '../actions/auth';

export default function (reduxState = null, action = {}) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.jwt
        default:
            return reduxState
    }
}