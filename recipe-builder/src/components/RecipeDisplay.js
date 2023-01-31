import React from "react";
import { connect } from "react-redux";
import { add_ingredient, add_instruction, add_name } from "../state/actions";

function RecipeDisplay(props) {
    const { recipes } = props
    return (
      <div className="recipe-display">
        <p>Click items to edit</p>
        {recipes.recipeName ? <h2 contentEditable="true">{recipes.recipeName}</h2> : <span></span>}
        {recipes.ingredients ? <p contentEditable="true">Ingredients: {recipes.ingredients}</p> : <span></span>}

        {recipes.instructions ? <p contentEditable="true">Instructions: {recipes.instructions}</p> : <span></span>}
        <button onClick={window.print}>Print/Save</button>        
      </div>
    )
  }

 

  export default RecipeDisplay;