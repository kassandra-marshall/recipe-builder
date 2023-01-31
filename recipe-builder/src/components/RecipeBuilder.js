import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { add_name, add_ingredient, add_instruction } from "../state/actions";

function RecipeBuilder(props) {
    const { setRecipes, recipes, add_name, add_ingredient, add_instruction  } = props
    const [form, setForm] = useState({
      recipeName: '',
      ingredients: '',
      instructions: ''
    //   "ingredients": [],
    //   "instructions": []
    });
    // const [ingredients, setIngredients] = useState([])

    // useEffect(() => {
    //     const jsonIngredients = JSON.stringify(props.ingredients)
    //     window.localStorage.setItem('ingredients', jsonIngredients);
    // }, [props.ingredients.length]);

    // useEffect(() => {
    //     const getIngredients = JSON.parse(window.localStorage.getItem('ingredients'))
    //     setForm({...form, ingredients:getIngredients});
    // }, []);
  
    const handleChange = (e) => {
      setForm({...form,
        [e.target.name]: e.target.value
      });
    }

    // figure out how to add individual ingredients and instructions to array inside object
    // const addIngredient = (e) => {
    // //     e.preventDefault()
    // //    setIngredients([...ingredients, form.ingredients])
    // //     add_ingredient(ingredients)
    //     // const newIngredients = [...form.ingredients]
    //     // newIngredients.push(e.target.value)
    //     // setForm({...form, ingredients: newIngredients})
    // }

    // const addInstruction = (e) => {
    //     e.preventDefault()
    //     setForm({...form, [form.instructions]: e.target.value})
        
    // }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setRecipes({
        ...recipes,
        recipeName: form.recipeName,
        ingredients: form.ingredients,
        instructions: form.instructions
      })
      document.querySelector("input").value=""
      const textArea = document.querySelectorAll("textarea")
      textArea.forEach((textArea) => (textArea.value = ""));
    }
  
    return(
      <div className='recipe'>
        <h2>Recipe Builder</h2>
        <form onSubmit={handleSubmit}>
          <div className="recipe-name">
            <label>Recipe Name: </label>
            <input onChange={handleChange} name='recipeName' id='recipe-name'/>
          </div>
          <div className="ingredients">
            <label>Ingredients:</label>
            <textarea onChange={handleChange} name='ingredients' id='ingredients'/>
            {/* <button onClick={addIngredient}>Add Ingredient</button> */}
          </div>
          <div className="instructions">
            <label>Instructions: </label>
            <textarea onChange={handleChange} name='instructions' id='instructions'/>
            {/* <button onClick={addInstruction}>Add Instruction</button> */}
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }


  export default RecipeBuilder;