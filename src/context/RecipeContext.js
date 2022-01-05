import React, {createContext, useState} from 'react'

export const RecipeContext = createContext()

// This will wrap up all the children components
export function RecipeProvider(props) {

    const [ recipeInfo, setRecipeInfo ] = useState([])

    return (
        <RecipeContext.Provider value={{recipeInfo, setRecipeInfo}}>
            {props.children}
        </RecipeContext.Provider>
    )
}