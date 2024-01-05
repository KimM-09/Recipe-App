import React from "react";

function ViewRecipe({ recipe, deleteARecipe }) {
  
    return (
      <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
              <img src= {recipe.photo} alt =" " className="scale-down" />
            </td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>
              <button name="delete" onClick={deleteARecipe}>
              Delete
              </button>
            </td>
      </tr>   
    );
  }

export default ViewRecipe;