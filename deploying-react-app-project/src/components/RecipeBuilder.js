import React, { useState, useEffect } from "react";

function RecipeBuilder(props) {
    const { setRecipes, recipes } = props
    const [form, setForm] = useState({
      recipeName: '',
      ingredients: '',
      instructions: ''
    //   ingredients: [],
    //   instructions: []
    });

    useEffect(() => {
        window.localStorage.setItem('form', form);
    }, [form]);

    useEffect(() => {
        setForm(window.localStorage.getItem('form'));
    }, []);
  
    const handleChange = (e) => {
      setForm({...form,
        [e.target.name]: e.target.value
      });
    }

    // figure out how to add individual ingredients and instructions to array inside object
    // const addIngredient = (e) => {
    //     e.preventDefault()
    //     setForm({...form, [form.ingredients]: e.target.value})
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