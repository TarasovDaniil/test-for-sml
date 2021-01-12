import {ERROR_LOAD_DATA, LOAD_DATA, START_LOAD_DATA} from "../../consts";
import {IItemsData} from "../reducers/ItemsReducer";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const load_data = () => {
    return (dispatch : any) => {
        dispatch(start_action_load());

        axios.get('http://localhost:3001/items')
            .then((res) => {
                dispatch(action_load_data(res.data));
            })
            .catch(() => {
                dispatch(error_action_load('Ошибка'));
            });
    }
};

export const save_data = (data : IItemsData) => {
    return (dispatch : any) => {
        dispatch(start_action_load());

        axios.post('http://localhost:3001/items', {...data, id: uuidv4()})
            .then((res) => {
                dispatch(action_load_data([res.data]));
            })
            .catch((err) => {
                dispatch(error_action_load(err.message));
            });
    }
};

function start_action_load() {
    return{
        type: START_LOAD_DATA
    }
}

function error_action_load(error : string){
    return{
        type: ERROR_LOAD_DATA,
        error
    }
}

function action_load_data(data : Array<IItemsData>) {
    return{
        type: LOAD_DATA,
        payload: data
    }
}