import update from 'react-addons-update';
import constants from './actionConstants';

const {} = constants;

const ACTION_HANDLER = {

}

const initialState = {}

export function HomeReducer(state=initialState, action){
    const handler = ACTION_HANDLER[action.type];

    return handler ? handler(state, action) : state;
}