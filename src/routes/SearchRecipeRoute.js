import React, {useState, useEffect} from 'react'

// Custom components
import Recipes from '../components/Recipes'
import Navigator from '../components/Navigator'

// Framer Motion Library
import { motion } from 'framer-motion'
// Variants for framer motion
import { titleVariants, opacityVariants } from '../variants/variants'

// Material UI Components
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';

function SearchRecipeRoute() {

    // State that will happen to be filled when the fetch is complete.
    const [recipes, setRecipes] = useState(null)
    
    // Link for load more
    const [nextLink, setNextLink] = useState(null)
    
    // The query that the user types in.
    const [query, setQuery] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);
    const [isLoadMoreSelected, setLoadMoreSelected] = useState(false)
    const [isNoLoadMore, setNoLoadMore] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => {
        document.title = 'Food API | Search'
        setNoLoadMore(false)
        setError(false)
    }, [])

    const fetchData = async () => {

        try {

            const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=52dbab2c&app_key=b70e72dff2f60851a6f8165cc4043b14`)
            const data = await res.json()

            if (data) {
                setNextLink(data['_links']['next']['href'])
                setRecipes(data.hits)
            }
        } catch (_error) {
            setError(true)
        }
    }

    const fetchNextDatas = async () => {

        const res = await fetch(nextLink)
        const data = await res.json()

        console.log(data['_links'])

        if (data['_links']['next']) {
            setNextLink(data['_links']['next']['href'])
            setRecipes([...recipes, ...data.hits])
        } else {
            setNoLoadMore(true)
        }
        setLoadMoreSelected(false)


    }

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
            className="flex items-center flex-col gap-5 bg-gradient-to-b from-orange-200 to-blue-200 min-h-screen py-[8rem] px-[2rem] lg:px-[8rem] scroll-smooth"
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
                onSubmit={(e) => {
                    e.preventDefault()

                    setSubmitted(true)
                    setNoLoadMore(false)
                    setError(false)
                }}
                variants={opacityVariants}
                initial="initial"
                animate="animate">

                    <ButtonGroup className="flex justify-center sm:max-w-[35rem] w-full">
                        <TextField
                                placeholder='Search...'
                                required={true}
                                value={query} 
                                onChange={(e) => {
                                    setQuery(e.target.value)
                                    setRecipes(null)
                                    setSubmitted(false)
                                    setError(false)
                                }}
                                variant="outlined"
                                className="max-w-[30rem] w-full rounded-none bg-slate-100"
                                 />
                            
                        <ColorButton 
                                type="submit" 
                                onClick={() => { 
                                if (query)
                                    fetchData()
                            }}> 
                            <SearchIcon /> 
                        </ColorButton>
                    </ButtonGroup>
            </motion.form>
            
            {/* RENDER THE LIST OF RECIPES */}
            {
                recipes ? 
                    <div className="flex items-center flex-col gap-8 mt-5">
                        {/* Pass the 'recipes' state. */}
                        <Recipes recipes={recipes} />
                        {!isNoLoadMore ? <h1 
                            onClick={() => { 
                                
                                fetchNextDatas();
                                setLoadMoreSelected(true)
                            }}
                            className="text-orange-900 font-[Helvetica] font-semibold text-lg cursor-pointer">
                            {isLoadMoreSelected ? "Loading..." : "Load More"}
                        </h1> : 
                            <h1 className="text-orange-900 font-[Helvetica] font-semibold text-lg">End of recipes</h1>}
                    </div>
                     : isError ? <h1 className="text-orange-800 text-lg text-center font-bold">Ooops! Looks like we don't have that recipe!</h1> :
                query && isSubmitted ? 
                    /** When the data is not yet fetched, the loading indicator will going to shown first. */
                    <div className="flex flex-col justify-center items-center h-[10rem]">
                        <h5 className="text-orange-800 text-lg text-center font-medium" >
                            Searching for {query} recipe...
                         </h5>
                        <CircularProgress />
                    </div> : 
                <h1></h1>
            }
            <Navigator />
        </motion.div> 
    )
}

export default SearchRecipeRoute
