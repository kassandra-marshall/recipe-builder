import { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import RecipeBuilder from './components/RecipeBuilder';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Create Your Recipe Now!</h1>
        <div className='links'>
          <Link to='/add-recipe'>Create Recipe </Link>
          <Link to='/view-recipe'> View Recipe</Link>
        </div>
      </header>
      <Switch>
        <Route path='/add-recipe'>
          <RecipeBuilder setRecipes={setRecipes} recipes={recipes}/>
        </Route>
        <Route path='/view-recipe'>
          <RecipeDisplay recipes={recipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
