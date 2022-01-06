import React, {useState} from 'react'
import { motion } from 'framer-motion'

function Nutritions({ nutrients }) {

    const [isExpanded, setExpanded] = useState(false)

    const expand = () => {
        setExpanded(!isExpanded)
    }

    return (
        <motion.div className={`rounded-[0_0_25px_25px] flex flex-col gap-2  relative after:content-[' '] after:block after:absolute after:bottom-[-15px]  after:w-[100%] after:h-[5rem] after:border-2  after:rounded-[0px] after:filter after:blur-lg after:border-transparent ${!isExpanded  && `max-h-[16rem] overflow-hidden after:bg-blue-100`}`}

        >

            <section className="flex justify-between items-center">
                <h3 className="text-orange-900 font-medium text-xl">
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
                                <h4 className="text-orange-800 text-lg font-semibold">
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
