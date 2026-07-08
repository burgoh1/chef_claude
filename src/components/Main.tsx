import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.tsx";
import IngredientsList from "./IngredientsList.tsx";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeShown, setRecipeShown] = useState<boolean>(false);

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient !== "string") return;
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
