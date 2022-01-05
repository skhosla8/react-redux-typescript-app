import { ActionType } from '../action-types';
import { Tile } from '../reducers/formReducer';

export const setData = (data: Tile) => {
    return {
        type: ActionType.SET_DATA,
        payload: data,
    };
};