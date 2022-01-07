import React, {useState} from 'react'

const useResize = () => {

    const [isMobileScreen, setMobileScreen] = useState(false)

    window.addEventListener('resize', () => {
        
        if (window.innerWidth <= 1024)
            setMobileScreen(true)
        else
            setMobileScreen(false)
    })
    return isMobileScreen
}

export {
    useResize
}