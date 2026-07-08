import ReactMarkdown from "react-markdown";

type ClaudeRecipeProps = {
  recipe: string;
};

export default function ClaudeRecipe({ recipe }: ClaudeRecipeProps) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
