import React from 'react'
import LoopIcon from '@material-ui/icons/Loop'
import './Footer.css'
import { IconButton } from '@material-ui/core'

function Footer() {
    
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className="footer">
          <div><p>آخرین به روز رسانی : امروز 27 آذر</p></div>
             <div >
                <IconButton onClick={refreshPage}>
                  <LoopIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Footer

