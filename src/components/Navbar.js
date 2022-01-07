import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { navVariants } from '../variants/variants'
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
    return (
        <motion.nav 
            className="bg-gradient-to-b from-blue-200 to-orange-50 flex flex-wrap justify-between px-8 py-4 fixed top-0 right-0 left-0 z-10 lg:px-[8rem]"
            variants={navVariants}
            initial="initial"
            animate="animate"
        >
            <h3 className="font-bold text-orange-700 text-lg">Food API</h3>
            <ul className="flex gap-8">
                <li className="text-orange-800 font-semibold">
                    <Link to="/">Search</Link>
                </li>
                <li className="text-orange-800 font-semibold">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-orange-800 font-semibold">
                    <a  href="https://github.com/NADS-PROGRAMMER/Search-Recipe-App" 
                        target="_blank">
                        <GitHubIcon />
                    </a>
                </li>
            </ul>
        </motion.nav>
    )
}

export default Navbar
