import { ActionType } from '../action-types';
import { Tile } from '../reducers/formReducer';
 
interface SetDataAction {
    type: ActionType.SET_DATA;
    payload: Tile;
}

export type Action = SetDataAction; // | other actions 