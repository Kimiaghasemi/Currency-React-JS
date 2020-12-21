import React from 'react'
import LoopIcon from '@material-ui/icons/Loop'
import './Currency.css'
import { IconButton } from '@material-ui/core'

function Footer() {

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div >
            <IconButton onClick={refreshPage} >
                <LoopIcon />
            </IconButton>
        </div>
        
    )
}

export default Footer
