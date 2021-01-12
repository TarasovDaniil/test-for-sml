import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ItemsReducer from "./ItemsReducer";

export const rootReducer = combineReducers({
    items: ItemsReducer,
    form: formReducer
});

export type IRootState = ReturnType<typeof rootReducer>