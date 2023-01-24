import React, { useState } from 'react';

function EditRecipe(props) {
    const { recipes } = props;
    const [edit, setEdit] = useState({
        recipeName: '',
        ingredients: '',
        instructions: '' 
    })
    // const handleChange = (e) => {
    //     setEdit({
    //         ...edit,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setEdit({
    //         ...setRecipe,
    //         recipeName: edit.recipeName,
    //         ingredients: edit.ingredients,
    //         instructions: edit.instructions
    //     })
    // }
    return (
      <div>
        <h2>{recipes.recipeName}</h2>
        {recipes.ingredients ? <p>Ingredients: {recipes.ingredients}</p> : <span></span>}
        {recipes.instructions ? <p>Instructions: {recipes.instructions}</p> : <span></span>}
        <button onClick={window.print}>Print/Save</button>
      </div>
    )
}

export default EditRecipe;