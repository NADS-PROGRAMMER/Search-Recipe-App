import React, {useState, useEffect} from 'react'
import { titleVariants, opacityVariants } from '../variants/variants'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SearchRecipeRoute() {

    const [recipes, setRecipes] = useState(null)
    const [query, setQuery] = useState('');
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

    return (
        <motion.div className="flex flex-col gap-5 bg-gradient-to-b from-orange-200 to-blue-200 min-h-screen py-[5rem] px-[2rem] lg:px-[8rem]">

            <motion.h1 className="text-2xl font-medium font-[Poppins] text-orange-800 lg:text-4xl"
                variants={titleVariants}
                initial="initial"
                animate="animate"
            >
                Find Your Recipe
            </motion.h1>

            <motion.form 
                className="flex items-center gap-2" 
                onSubmit={(e) => e.preventDefault()}
                variants={opacityVariants}
                initial="initial"
                animate="animate">
                <section className="flex flex-col items-start gap-2">
                    <label className="text-orange-800" htmlFor="recipe">Search Your Recipe Here:</label>

                    <section className="flex gap-3 flex-wrap">
                        <input 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                            className="px-2 py-2 border border-orange-800 text-orange-800" 
                            type="text" 
                            id="recipe" 
                            placeholder="Search the recipe for..."/>
                             <TextField id="filled-basic" label="Filled" variant="filled" />
                            <Button variant="contained">Contained</Button>
                        <button 
                            onClick={() => { 
                                setRecipes('')
                            }}
                            className="btn btn-md bg-orange-400 hover:bg-orange-800 border-none">
                            Search
                        </button>
                    </section>
                    
                    
                </section>
            </motion.form>

            {recipes ? <div className="flex flex-wrap gap-10 ">
                {recipes && recipes.hits.map(recipe => {

                        return (
                                
                            <div class="card border border-orange-200  h-fit flex-[0_1_20rem] rounded-[25px] shadow-[0px_0px_10px_#ccc] bg-white max-h-max">
                                <figure>
                                    <img className="max-h-[15rem]" src={recipe.recipe.image} />
                                </figure> 

                                <div class="card-body items-start">
                                    <h2 class="card-title text-orange-900 max-w-[19ch] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                        {recipe.recipe.label}
                                    </h2> 
                                    <div class="justify-end card-actions">

                                        <button class="btn btn-secondary bg-orange-500 hover:bg-orange-800 border-none ">
                                            More info
                                        </button>
                                    </div>
                                </div>
                            </div> 
                          
                        )
                    })
                }
            </div> : query ? <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-lg text-orange-800">Loading...</h1>
                </div> : <h1></h1>}
            
        </motion.div> 
    )
}

export default SearchRecipeRoute
