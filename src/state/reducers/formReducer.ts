import { Action } from '../actions';
import { ActionType } from '../action-types';
import { FormInput } from '../../components/Form/Form';

// describe shape of incoming form data 
export type Tile = Readonly<FormInput>;

export interface FormState {
    formData: Tile[];
}

const initialState = {
    formData: [],
};

const formReducer = (state: FormState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_DATA: {
            return {
                ...state,
                formData: [...state.formData, action.payload],
            };
        }
        default:
            return state;
    }
}

export default formReducer;