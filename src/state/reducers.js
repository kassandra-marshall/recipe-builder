import { ADD_INGREDIENT, ADD_INSTRUCTION, ADD_NAME } from "./actions";
import { combineReducers } from "redux";

const initialState = {
    recipeName: '',
    ingredients: [],
    instructions: []
}

function nameOfRecipe(state=initialState, action) {
    switch(action.type){
        case ADD_NAME:
            return({
                ...state,
                recipeName: action.payload
            })
        default:
            return state
    }
}

function addIngredient(state=initialState, action) {
    switch(action.type){
        case ADD_INGREDIENT:
            return({
                ...state,
                ingredients: [action.payload]
            })
        default:
            return state
    }
}

function addInstruction(state=initialState, action) {
    switch(action.type){
        case ADD_INSTRUCTION:
            return({
                ...state,
                instructions: [action.payload]
            })
        default:
            return state
    }
}

export default combineReducers({nameOfRecipe, addIngredient, addInstruction})