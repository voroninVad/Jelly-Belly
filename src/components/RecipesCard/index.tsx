import { FC } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../types";
import styles from "./index.module.css";

type RecipeItem = {
    recipeItem: Recipe;
};
export const RecipeCard: FC<RecipeItem> = ({ recipeItem }) => {
  return (
    <Link to={`/Jelly-Belly/recipe/${recipeItem.recipeId}`} className={styles.recipe__container}>
      <img src={recipeItem.imageUrl} alt="" />
      <div className={styles.info}>
        <h3>{recipeItem.name}</h3>
        <p className={styles.description}>
          {recipeItem.description.length > 100
            ? recipeItem.description.slice(0, 100) + "..."
            : recipeItem.description}
        </p>
        {recipeItem.makingAmount && (
          <p className={styles.additional_info}> Make: {recipeItem.makingAmount}</p>
        )}
        {recipeItem.cookTime && (
          <p className={styles.additional_info}>Cook Time: {recipeItem.cookTime}</p>
        )}
        {recipeItem.totalTime && (
          <p className={styles.additional_info}>Total Time: {recipeItem.totalTime}</p>
        )}
      </div>
    </Link>
  );
};