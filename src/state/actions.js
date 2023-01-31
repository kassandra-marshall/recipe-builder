export const ADD_NAME = 'ADD_NAME';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';

export function add_name(recipeName) {
    return({type: ADD_NAME, payload:recipeName})
}

export function add_ingredient(ingredient) {
    return({type: ADD_INGREDIENT, payload: ingredient})
}

export function add_instruction(instruction) {
    return({type: ADD_INSTRUCTION, payload: instruction})
}