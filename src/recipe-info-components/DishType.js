import React from 'react'
import SectionFormat from './SectionFormat'

function DishType({ dishType }) {
    return (
        <>
            <SectionFormat sectionTitle="Dish Type" list={dishType} />
        </>
    )
}

export default DishType
