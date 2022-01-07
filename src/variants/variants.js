const titleVariants = {
    initial: {
        x: '-100%'
    },
    animate: {
        x: 0,
        transition: {
        
            duration: 2,
            type: 'spring',
            stiffness: 350
        }
    }
}

const navVariants = {

    initial: {
        y: '-100%'
    },
    animate: {
        y: 0,
        transition: {
            type: 'tween',
            duration: .5
        }
    }
}

const opacityVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const recipeButtonVariants = {
    hover: {
        scale: [1, 1.1, 1, 1.1, 1],
    }
}

const paragraphVariants = {

    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            delay: .7
        }
    }
}

const socialsVariants = {

    whileHover: {
        scale: 1.3,
    }
}

const backdropVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .5,
            when: 'afterChildren'
        }
    }
}

const modalVariant = {
    initial: {
        y: '-100vh'
    },
    mobileInitial: {
        y: '100vh',
    },
    animate: {
        y: 0,
        transition: {
            duration: .5,
            type: 'spring'
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            duration: .5,
            type: 'spring'
        }
    }
}

export {
    navVariants,
    titleVariants,
    opacityVariants,
    recipeButtonVariants,
    paragraphVariants,
    socialsVariants,
    backdropVariant,
    modalVariant
}