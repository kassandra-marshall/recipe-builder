import { useState } from 'react';
import './App.css';

function RecipeBuilder(props) {
  const { setRecipes, recipes } = props
  const [form, setForm] = useState({
    recipeName: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setForm({...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes({
      ...recipes,
      recipeName: form.recipeName,
      ingredients: form.ingredients,
      instructions: form.instructions
    })
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }

  return(
    <div className='recipe'>
      <h1>Recipe Builder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name</label>
          <input onChange={handleChange} name='recipeName' id='recipe-name'/>
        </div>
        <div>
          <label>Ingredients</label>
          <input onChange={handleChange} name='ingredients' id='ingredients'/>
        </div>
        <div>
          <label>Instructions</label>
          <input onChange={handleChange} name='instructions' id='instructions'/>
        </div>
        <button>Submit</button>
        <button onClick={window.print}>Print</button>
      </form>
    </div>
  )
}

function RecipeDisplay(props) {
  const { recipes } = props
  return (
    <div>
      <h2>{recipes.recipeName}</h2>
      <p>Ingredients: {recipes.ingredients}</p>
      <p>Instructions: {recipes.instructions}</p>
    </div>
  )
}

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="App">
      <RecipeBuilder setRecipes={setRecipes} recipes={recipes}/>
      <RecipeDisplay recipes={recipes} />
    </div>
  );
}

export default App;
