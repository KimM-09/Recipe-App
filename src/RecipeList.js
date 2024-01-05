import React from "react";
import ViewRecipe from "./ViewRecipe";

function RecipeList({ recipes, deleteARecipe }) {
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <ViewRecipe
              deleteARecipe={() => deleteARecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}         
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
