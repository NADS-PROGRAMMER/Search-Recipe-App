import React from 'react'
import { motion } from 'framer-motion'
import { recipeButtonVariants } from '../variants/variants'

function Recipes({ recipes }) {
    return (
        <div className="flex flex-wrap gap-10 ">

                {recipes && recipes.hits.map(recipe => {

                        return (
                                
                            <div 
                                class="card border border-orange-100  h-fit flex-[0_1_20rem] rounded-[25px] shadow-[0px_0px_10px_#ffffff22] bg-gradient-to-l from-orange-50 to-blue-50 max-h-max">
                                
                                {/* Recipe Photo */}
                                <figure>
                                    <img className="max-h-[15rem]" src={recipe.recipe.image} />
                                </figure> 

                                <div class="card-body items-start">

                                    {/* Recipe Name */}
                                    <h2 class="card-title text-orange-900 max-w-[19ch] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                        {recipe.recipe.label}
                                    </h2> 
                                    {/* CTA */}
                                    <motion.div 
                                        class="justify-end card-actions"
                                        variants={recipeButtonVariants}
                                        whileHover="hover"
                                    >

                                        <button 
                                            class="btn btn-secondary bg-orange-500 hover:bg-orange-400 border-none"
                                            
                                        >
                                            More info
                                        </button>
                                    </motion.div>
                                </div>
                            </div> 
                          
                        )
                    })
                }
            </div>
    )
}

export default Recipes
