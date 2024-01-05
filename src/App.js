import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const newRecipe = (createRecipe) =>
  setRecipes((currentRecipe) => [
    ...currentRecipe,
    createRecipe
  ]);

  const deleteARecipe = (indexToDel) =>
  setRecipes((currentRecipe) => 
  currentRecipe.filter((recipe, index) => index !== indexToDel))

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteARecipe={deleteARecipe} />
      <RecipeCreate newRecipe={newRecipe} />
    </div>
  );
} 

export default App;
