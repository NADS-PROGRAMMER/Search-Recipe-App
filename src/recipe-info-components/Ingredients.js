import React from 'react'

/**
 * @param {ingredients} ingredients
 * - A list of ingredients for a particular recipe. 
 * @returns 
 * - A list of ingredients.
 */
function Ingredients({ ingredients }) {
    return (
        <div>
            {/* Title Section */}
            <section>
                <h3 className="text-orange-900 font-semibold font-['Poppins'] text-xl sticky top-0">
                    Ingredients
                </h3>
            </section>

            {/* Ingredient text */}
            <ul className="px-5 list-disc">
                {
                    ingredients.map((ingredient, index) => {
                        return (
                            <li key={index} className="text-orange-700">{ingredient.text}</li> 
                        )
                    })
                }
               
            </ul>
        </div>
    )
}

export default Ingredients
