import React from 'react'
import SectionFormat from './SectionFormat'

function MealType({ mealType }) {
    return (
        <>
         <SectionFormat sectionTitle="Meal Type" list={mealType} />   
        </>
    )
}

export default MealType
