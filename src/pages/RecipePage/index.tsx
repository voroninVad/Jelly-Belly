import { useUnit } from "effector-react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../../types";
import { useEffect, useState } from "react";
import { fetchRecipe, RecipeStore } from "../../effector/recipe/recipeStore";
import "./index.css";
import Loading from "../../components/Loading";

const RecipePage = () => {
  const { id } = useParams<{id:string}>();
  const recipe = useUnit<Recipe | null>(RecipeStore);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      if(id){
        setLoading(false);
        await fetchRecipe(id);
        setLoading(true);
      }
    };
    loadData();
  }, [id]);
  return (
    <main>
      {loading ? (
      <div className="container__recipe">
        <h3>{recipe?.name}</h3>
        <p>{recipe?.description}</p>

        <div className="item_recipe">
          {recipe?.prepTime && <p>Preparation time: {recipe?.prepTime}</p>}
          {recipe?.cookTime && <p>Cook time: {recipe?.cookTime}</p>}
          {recipe?.totalTime && <p>Total time: {recipe?.totalTime}</p>}
          {recipe?.makingAmount && <p>Recipe makes {recipe?.makingAmount}</p>}
        </div>
        <div className="img_recipe">
          <img src={recipe?.imageUrl} alt={recipe?.name} />
        </div>
        <div className="item_recipe">
            <h4>Ingredients</h4>
            <ul>
                {recipe?.ingredients.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
        <div className="item_recipe">
            <h4>Directions</h4>
            <ul>
                {recipe?.directions.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
        <Link 
        to="/Jelly-Belly/recipes/" className="link_back"
        >
        Back to recipes &rarr;
        </Link>
      </div>
      ) : 
      (<Loading />)  }
    </main>
  );
};

export default RecipePage;
