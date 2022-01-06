import React, {useContext} from 'react'
import { motion } from 'framer-motion'
import RecipeInfoModal from '../components/RecipeInfoModal'
import { RecipeContext } from '../context/RecipeContext'

function Recipes({ recipes }) {

    const {recipeInfo, setRecipeInfo} = useContext(RecipeContext)
    
    return (

        <div className="flex justify-center flex-wrap gap-10 ">
            
            {recipes && recipes.hits.map(recipe => {

                    return (
                        
                        <label htmlFor="recipe-modal">
                            <motion.div 

                                onClick={() => setRecipeInfo(recipe)}
                                className="relative group card border border-orange-100  h-fit flex-[0_1_20rem] rounded-[25px] shadow-[0px_0px_10px_#ffffff22] bg-gradient-to-l from-orange-50 to-blue-50 max-h-max before:content-[' '] before:absolute before:block before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black before:opacity-[.5] cursor-pointer"
                                whileHover={{
                                    y: '-1rem'
                                }}
                                >
                                
                                {/* Recipe Photo */}
                                <figure className="group">
                                    <img className="max-h-[15rem]" src={recipe.recipe.image} />
                                    <span 
                                    className="opacity-1 transition-all group-focus:opacity-100 lg:opacity-0 group-hover:opacity-100 px-5 text-center text-lg font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-300">
                                        {recipe.recipe.label}
                                    </span>
                                </figure> 

                                
                            </motion.div> 
                        </label>
                    )
                })
            }
            <RecipeInfoModal />
        </div>
    )
}

export default Recipes
