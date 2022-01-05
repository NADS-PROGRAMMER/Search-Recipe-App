import React, {createContext, useState} from 'react'

export const RecipeContext = createContext()

// This will wrap up all the children components
export function RecipeProvider(props) {

    const [checkout, setCheckout] = useState({

        subTotal: 0,
        otherDetails: {},
        items: []
    })

    return (
        <RecipeContext.Provider value={{checkout, setCheckout}}>
            {props.children}
        </RecipeContext.Provider>
    )
}