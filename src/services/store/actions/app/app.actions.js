import {SET_APP_READY} from "./app.actions.types";

export const setAppReady = (statut) => ({
    type: SET_APP_READY,
    payload: statut,
});