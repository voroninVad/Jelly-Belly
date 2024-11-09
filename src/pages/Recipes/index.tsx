import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import { fetchRecipes, RecipesStore } from "../../effector/recipes/recipesStore";
import { RecipesT } from "../../types";
import { RecipeCard } from "../../components/RecipesCard";

const Recipes = () => {
    const recipes = useUnit<RecipesT | null>(RecipesStore)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(false)
            await fetchRecipes(page)
            setLoading(true)
        };
        loadData();
    }, [page]);

    const load = ()=>{
        setPage(page + 1);
    }
    return ( 
        <div className="history_container">
            <h1>Recipes ...</h1>
            {loading && recipes?.items ? (
                    <InfiniteScroll
                        next={load}
                        dataLength={recipes.items.length}
                        loader={<Loading />}
                        hasMore={page < recipes.totalPages}
                    > 
                        {
                            recipes.items.map((item) =>(
                                <RecipeCard key={item.recipeId} recipeItem={item}/>
                            ))
                        }
                    </InfiniteScroll> 
                    ) : ( <Loading/> )
            }
        </div>
     );
}
 
export default Recipes;