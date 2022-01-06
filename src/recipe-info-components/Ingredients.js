import React from 'react'

function Ingredients({ ingredients }) {
    return (
        <div>
            <section>
                <h3 className="text-orange-900 font-semibold font-['Poppins'] text-xl sticky top-0">
                    Ingredients
                </h3>
            </section>

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
