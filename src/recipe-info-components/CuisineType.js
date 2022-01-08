import React from 'react'
import SectionFormat from './SectionFormat'

function CuisineType({ cuisineType }) {
    return (
        <>
           <SectionFormat sectionTitle="Cuisine Type" list={cuisineType}/>
        </>
    )
}

export default CuisineType
