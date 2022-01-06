import React, {useState, useEffect, useContext} from 'react'

// Custom components
import Recipes from '../components/Recipes'

// Framer Motion Library
import { motion } from 'framer-motion'
// Variants for framer motion
import { titleVariants, opacityVariants } from '../variants/variants'

// Material UI Components
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';

// Context
import { RecipeContext } from '../context/RecipeContext'

function SearchRecipeRoute() {

    // State that will happen to be filled when the fetch is complete.
    const [recipes, setRecipes] = useState(null)

    // The query that the user types in.
    const [query, setQuery] = useState('');

    // useEffect for fetching the data
    useEffect(() => {

        if (!recipes) {
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=52dbab2c&app_key=b70e72dff2f60851a6f8165cc4043b14`)
            .then(res => res.json())
            .then(data => {

                setRecipes(data)
            })
        }
        console.log(recipes) // This is for testing only.
    }, [recipes])

    const containerVariants = {
        animate: {
            transition: {
                type: 'tween',
                when: 'beforeChildren'
            }
        },
        exit: {
            x: '-100%',
            transition: {
                type: 'tween',
                when: 'beforeChildren'
            }
        },
    }

    // Custom Button
    const ColorButton = styled(Button)({
        color: 'white',
        backgroundColor: 'black',
        padding: '0 1rem',
        '&:hover': {
            backgroundColor: 'black'
        }
    })

    return (
        <motion.div 
            className="flex items-center flex-col gap-5 bg-gradient-to-b from-orange-200 to-blue-200 min-h-screen py-[8rem] px-[2rem] lg:px-[8rem]"
            variants={containerVariants}
            exit="exit"
        >
            
            {/* Page Title */}
            <motion.h1 className="text-2xl font-medium font-[Poppins] text-orange-800 lg:text-4xl"
                variants={titleVariants}
                initial="initial"
                animate="animate"
            >
                Find Your Recipe
            </motion.h1>

            {/* Page Form */}
            <motion.form 
                className="flex items-center gap-2 sm:w-[35rem]" 
                onSubmit={(e) => e.preventDefault()}
                variants={opacityVariants}
                initial="initial"
                animate="animate">

                    <ButtonGroup className="flex justify-center sm:max-w-[35rem] w-full">
                        <TextField
                                placeholder='Search...'
                                value={query} 
                                onChange={(e) => setQuery(e.target.value)}
                                variant="outlined"
                                className="max-w-[30rem] w-full rounded-none bg-slate-100"
                                 />
                            
                        <ColorButton type="submit" onClick={() => { 
                                setRecipes('')
                            }}> <SearchIcon /> </ColorButton>
                    </ButtonGroup>
            </motion.form>
            
            {/* RENDER THE LIST OF RECIPES */}
            {
                recipes ? 
                    <div className="flex flex-col gap-5 mt-5">
                        {/* Pass the 'recipes' state. */}
                        <Recipes recipes={recipes} />
                    </div>
                     : 
                query ? 
                    /** When the data is not yet fetched, the loading indicator will going to shown first. */
                    <div className="flex flex-col justify-center items-center h-[10rem]">
                        <Typography className="text-orange-800 text-2xl" variant="body1" component="h5">
                            Searching for {query} recipe...
                         </Typography>;
                        <CircularProgress />
                    </div> : 
                <h1></h1>
            }
            
        </motion.div> 
    )
}

export default SearchRecipeRoute
