import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST,DELETE_USER } from "./ActionType"

const InitialState = {
    loading: true,
    userlist: [],
    useobj: {},
    errmessage: ""
}
export const Reducer = (state = InitialState, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist: action.payload,
                useobj: {}
            }

            case DELETE_USER:return{
                ...state,
                loading:false
            }

        default:
            return state
    }
}