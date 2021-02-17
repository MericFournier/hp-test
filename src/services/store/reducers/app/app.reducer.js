import { appInitialState } from "./app.initialStore";
import {SET_APP_READY} from "../../actions/app/app.actions.types";

const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case SET_APP_READY:
            return {
                ...state,
                ready : action.payload,
            };

        default:
            return {...state};
    }
};

export default appReducer;