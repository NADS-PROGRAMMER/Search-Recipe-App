import React from 'react'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function Navigator() {

    const scrollDown = () => {
        window.scroll({
            top: document.body.getBoundingClientRect().height,
            left: 0,
            behavior: 'smooth',
        })
    }

    const scrollUp = () => {
        window.scroll({
            top: -document.body.getBoundingClientRect().height,
            left: 0,
            behavior: 'smooth',
        })
    }

    const actions = [
        {
            icon: <ArrowDropDownCircleIcon 
            onClick={scrollDown}/>, 
            name: 'Go Down'
        },
        {
            icon: <ArrowDropDownCircleIcon onClick={scrollUp} className="transform rotate-180"/>, 
            name: 'Go Up'
        },
    ]
    
    return (
        <div className="fixed bottom-[20px] right-[10px] p-[.5rem] rounded-full transition-all cursor-pointer">
           
            <SpeedDial  className="text-orange-800"
                ariaLabel="Speed Dial"
                icon={<SettingsIcon />}
                >
                {
                    actions.map(action => {
                        return (<SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />)
                    })
                }
            </SpeedDial>
        </div>
    )
}

export default Navigator
