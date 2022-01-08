import React from 'react'
import SectionFormat from './SectionFormat'

function DietLabels({ dietLabels }) {
    return (
        <>
            <SectionFormat sectionTitle="Diet Labels" list={dietLabels}/>
        </>
    )
}

export default DietLabels
