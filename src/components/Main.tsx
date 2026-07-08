import { useState } from "react";
import IngredientsList from "./IngredientsList.tsx";
import ClaudeRecipe from "./ClaudeRecipe.tsx";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("");

  async function getRecipe() {
    const res = await fetch("https://chef-claude.vercel.app/api/get-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    });
    const data = await res.json();
    setRecipe(data.recipe);
  }

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient !== "string") return;
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
