import React from 'react'

// Variants for Framer Motion
import {titleVariants, paragraphVariants, socialsVariants} from '../variants/variants'

// Framer Motion
import {motion} from 'framer-motion'

// Icons from Material UI
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function About() {

    const containerVariants = {
        exit: {
            x: '100%',
            transition: {
                type: 'tween',
                when: 'beforeChildren',
            }
        }
    }

    return (
        <motion.div 
            className="flex flex-col gap-5 bg-gradient-to-b from-orange-200 to-blue-200 min-h-screen py-[8rem] px-[2rem] lg:px-[8rem]"
            variants={containerVariants}
            exit="exit"
            >
            
            <motion.h1 
                className="text-2xl font-medium font-[Poppins] text-orange-800 lg:text-4xl"
                variants={titleVariants}
                initial="initial"
                animate="animate"
                >
                About This App
            </motion.h1>

            <motion.p 
                className="text-xl text-orange-600 lg:max-w-[120ch]"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                >

                This is a simple app that enables the user to find a specific recipe for a certain ingredient. It will give you the ingredients, cuisine types, meal types and total nutrients of the selected recipe. It uses <a className="font-semibold text-orange-800 italic" href="https://developer.edamam.com/edamam-docs-recipe-api" target="_blank">Edamam Recipe Search API</a>. One of the examples of it is when you search for the <em>'Chicken'</em> recipes:
            </motion.p>

            <motion.p 
                className="text-xl text-orange-600"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                >
                    You can get:
            </motion.p>
            
            <motion.ul 
                className="pl-5 text-orange-800 list-disc"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                >
                <li>Chicken Stew</li>
                <li>Chicken Paprikash</li>
                <li>Catalan Chicken</li>
                <li>Persian Chicken</li>
                <li>Etc...</li>
            </motion.ul>

            <motion.p 
                className="text-xl text-orange-600 lg:max-w-[120ch]"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                >
                    This app also a personal project to practice the new technology that I just learned. The technologies that I used to this are React.js; Framer Motion for the animation library for React; Material and Daisy UI which is for the components of the app.
            </motion.p>
            
            <motion.footer
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                >

                <section className="flex flex-col items-start mt-10">
                    <span 
                        className="relative before:content-[' '] before:block before:absolute before:top-0 before:left-0 before:h-[.09rem] before:bg-orange-800 before:w-[20rem] text-orange-800 font-bold text-center">
                            Copyright &copy; 2021
                    </span>
                    <span className="text-orange-800">
                        Created by Nads Marcelo
                    </span>
                </section>

                <section className="text-orange-800 font-bold mt-8">
                    <span>Let's Connect!</span>
                    <ul className="flex gap-2">
                        <motion.li
                            variants={socialsVariants}
                            whileHover="whileHover"
                            >
                            <a href=""
                                
                                >
                                <TwitterIcon className="text-orange-800" />
                            </a>
                        </motion.li>
                        <motion.li
                            variants={socialsVariants}
                            whileHover="whileHover"
                            >
                            <motion.a href="">
                                <LinkedInIcon className="text-orange-800" />
                            </motion.a>
                        </motion.li>
                        <motion.li
                            variants={socialsVariants}
                            whileHover="whileHover"
                            >
                            <motion.a href="">
                                <EmailIcon className="text-orange-800" />
                            </motion.a>
                        </motion.li>
                    </ul>
                </section>
                
            </motion.footer>
        </motion.div>
    )
}

export default About
