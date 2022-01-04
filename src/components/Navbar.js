import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { navVariants } from '../variants/variants'

function Navbar() {
    return (
        <motion.nav 
            className="bg-orange-300 flex justify-between px-8 py-4 fixed top-0 right-0 left-0 z-10 lg:px-[8rem]"
            variants={navVariants}
            initial="initial"
            animate="animate"
        >
            <h3 className="font-bold text-orange-700 text-lg">Food API</h3>
            <ul className="flex gap-5">
                <li className="text-orange-800 font-semibold">
                    <Link to="/">Search</Link>
                </li>
                <li className="text-orange-800 font-semibold">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </motion.nav>
    )
}

export default Navbar
