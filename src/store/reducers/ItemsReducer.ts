import {ERROR_LOAD_DATA, LOAD_DATA, START_LOAD_DATA} from "../../consts";

export interface IItemsData{
    sum: number | null,
    ndfl: number | null,
    sumPay: number | null
}

export interface IStateItems{
    load: boolean,
    data: Array<IItemsData>
}

interface IActionItems {
    type: string,
    error?: string,
    payload?: Array<IItemsData>
}

const initVal : IStateItems = {
    load: false,
    data: []
};

export default function ItemsReducer(state=initVal, action : IActionItems) {
    switch (action.type) {
        case START_LOAD_DATA : {
            return {
                ...state,
                load: true
            }
        }
        case ERROR_LOAD_DATA : {
            return {
                ...state,
                load: false
            }
        }
        case LOAD_DATA : {
            return {
                ...state,
                load: false,
                data: action.payload
            }
        }
        default:{
            return state;
        }

    }
}