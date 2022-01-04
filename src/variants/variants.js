const titleVariants = {
    initial: {
        x: '-100%'
    },
    animate: {
        x: 0
    },
    transition: {
        mass: 500,
        duration: 2,
        type: 'spring',
        stiffness: 200
    }
}

const navVariants = {

    initial: {
        y: '100%'
    },
    animate: {
        y: 0
    },
    transition: {
        type: 'tween',
        duration: 2
    }
}
const opacityVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 4
    }
}
export {
    navVariants,
    titleVariants,
    opacityVariants
}