import React, {createContext, useState} from 'react'
import { useResize } from '../hooks/resize-hook'

export const RecipeContext = createContext()

// This will wrap up all the children components
export function RecipeProvider(props) {

    const [ recipeInfo, setRecipeInfo ] = useState(null)
    const [ isModalOpen, setModalOpen ] = useState(false)
    const isMobileScreen = useResize()

    return (
        <RecipeContext.Provider value={{recipeInfo, setRecipeInfo, isModalOpen, setModalOpen, isMobileScreen}}>
            {props.children}
        </RecipeContext.Provider>
    )
}