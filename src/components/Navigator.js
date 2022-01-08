import React from 'react'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function Navigator() {

    const scroll = (scrollAmount) => {
        window.scrollTo({
            top: scrollAmount,
            left: 0,
            behavior: 'smooth',
        })
    }

    const actions = [
        {
            icon: <ArrowDropDownCircleIcon />, 
            name: 'Go Down',
            scrollAmount: document.body.getBoundingClientRect().height + document.body.getBoundingClientRect().bottom
        },
        {
            icon: <ArrowDropDownCircleIcon className="transform rotate-180"/>, 
            name: 'Go Up',
            scrollAmount: 0
        },
    ]
    
    return (
        <div className="fixed bottom-[20px] right-[10px] p-[.5rem] rounded-full transition-all cursor-pointer">
           
            <SpeedDial  className="text-orange-800"
                ariaLabel="Speed Dial"
                icon={<SettingsIcon />}
                >
                <SpeedDialAction
                            onClick={() => scroll(document.body.getBoundingClientRect().height)}
                            key={actions[0].name}
                            icon={actions[0].icon}
                            tooltipTitle={actions[0].name} />
                <SpeedDialAction
                            onClick={() => scroll(-document.body.getBoundingClientRect().height)}
                            key={actions[1].name}
                            icon={actions[1].icon}
                            tooltipTitle={actions[1].name} />
            </SpeedDial>
        </div>
    )
}

export default Navigator
