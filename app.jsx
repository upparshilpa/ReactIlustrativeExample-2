import './index.css'
import React, {useEffect, useState} from 'react';
import RecipeTitle from './RecipeTitle'
//TODO: Import IngredientList
import IngredientList from '.IngredientList'

function App() {
    //TODO: Add initialRecipe object
    const initialRecipe = {
        title: 'mashed potatoes',
        feedback: {
            rating:4.8,
            reviews: 20
        },
        ingredients: [
            {name: '3 potatoes, cut into 1/2"pieces', prepared: false},
            {name: '4 tbsp butter', prepared: false},
            {name: '1/8 cup heavy cream', prepared: false},
            {name: 'salt', prepared: true},
            {name: 'pepper', prepared: true},
        ]
    };
    //TODO: create recipe state
    const [recipe, setRecipe] = useState(initialRecipe);

    //TODO: add new state properly
    const [recipe, setRecipe ] = useState(false);

    //TODO: Create ingredientClick even listener
    function ingredientClick(index) {
        const updateRecipe = { ... recipe };
        updateedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared
        setRecipe(updatedRecipe);

    }

    //TODO: Add the effect hook
    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
        setRecipe(updatedRecipe);
    }, [recipe]);
    
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/*TODO: Pass recipe metadata to RecipeTitle */}
            
            <RecipeTitle title={recipe.title} feedback={recipe.feedback}/>
            {/* TODO: Pass ingredients and event listner to IngredientList*/}
            <IngredientList ingredients={recipe.ingredients} obClick={ingredientClick}/>
            {/*TODO: Add the prep work display */}
            { prepared? <h2>prep work done1</h2> : <h2>just keep chopping</h2>}

        </article>
    )
}
export default app;

export default App;