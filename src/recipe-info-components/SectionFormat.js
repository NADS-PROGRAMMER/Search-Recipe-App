import React from 'react'

function SectionFormat({ sectionTitle, list }) {
    return (
        <>
            { list.length > 0 ? <div>
                <section className="flex justify-between items-center">
                    <h3 
                        className="text-orange-900 font-semibold font-['Poppins'] text-xl">
                        {sectionTitle}
                    </h3>
                </section>

                <ul className="px-5 list-disc">
                    {
                        list.map((item, index) => {

                        return ( 
                            <li className="text-orange-700" key={index}>{item}</li>
                        )
                        })
                    }
                </ul>
            </div> : 
                <h3 
                    className="text-orange-900 font-semibold font-['Poppins'] text-xl">
                    There are no {sectionTitle} specified.
                </h3>
            }
        </>
    )
}

export default SectionFormat
