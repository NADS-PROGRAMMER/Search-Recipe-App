import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

function Nutritions({ nutrients, expanded, setExpanded }) {

    const expand = () => {
        setExpanded(!expanded)
    }

    return (
        <motion.div className={`rounded-[0_0_25px_25px] flex flex-col gap-2  relative ${!expanded  && `max-h-[16rem] overflow-hidden `}`}

        >

            <section className="flex justify-between items-center">
                <h3 className="text-orange-900 font-semibold font-['Poppins'] text-xl">
                    Nutritions
                </h3>
                <span onClick={expand} className="text-orange-500 cursor-pointer">
                    Show More
                </span>
            </section>
            
            {
                Object.keys(nutrients).map((nutrient, index) => {

                    return (
                        <div key={index} className="flex items-center gap-2 border border-orange-50 rounded-[25px] p-1">
                            <section className="avatar">
                                <span className="bg-blue-100 border-1 border-blue-500 text-black rounded-full p-3 text-center">
                                    {nutrients[nutrient]['quantity'].toFixed()}
                                </span>
                            </section>

                            <section>
                                <h4 className="text-orange-800 text-lg font-medium">
                                    {nutrients[nutrient]['label']}
                                </h4>
                                <span className="text-orange-500">
                                    {nutrients[nutrient]['unit']}
                                </span>
                            </section>
                        </div>
                    )
                })
            }
            
        </motion.div>
    )
}

export default Nutritions
