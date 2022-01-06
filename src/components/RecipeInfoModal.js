import React, {useState, useContext} from 'react'
import { RecipeContext } from '../context/RecipeContext'
import Nutritions from '../recipe-info-components/Nutritions'
import Ingredients from '../recipe-info-components/Ingredients'

function RecipeInfoModal() {

    const { recipeInfo, setRecipeInfo } = useContext(RecipeContext)
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            {recipeInfo && <div>
                <input type="checkbox" id="recipe-modal" className="modal-toggle" /> 
                <div 
                    onClick={() => {
                        document.getElementById('recipe-modal').checked = false
                        setExpanded(false)
                    }}
                    className="modal lg:items-start lg:py-5" >
                    
                    <div onClick={(e) => e.stopPropagation()} 
                    className="modal-box flex flex-col gap-3 bg-gradient-to-b from-orange-200 to-blue-200 max-h-[30rem] overflow-y-auto relative lg:max-h-[100%]">

                        <hr className="border-2 border-orange-500 max-w-[3rem] w-[3rem] mx-auto"/>
                        {/* Recipe Name */}
                        <section className="flex flex-col gap-2">
                            <h2 className="text-orange-900 font-bold text-xl font-['Helvetica']">{recipeInfo.recipe.label}</h2>
                            <hr className="border-2 border-orange-500 max-w-[4rem]"/>
                        </section>
                    
                        <section className="flex flex-col gap-5">
                            
                            <Ingredients ingredients={recipeInfo.recipe.ingredients}/>
                            <Nutritions expanded={expanded} setExpanded={setExpanded} nutrients={recipeInfo.recipe.totalNutrients}/>

                        </section>
                        <div className="modal-action">
                            <label onClick={() => {
                                setExpanded(false);
                            }} htmlFor="recipe-modal" className="btn bg-orange-500 border-none hover:bg-orange-400">Close</label>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    )
}

export default RecipeInfoModal
