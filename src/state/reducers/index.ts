import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
