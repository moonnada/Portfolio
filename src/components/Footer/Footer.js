import React from 'react'
import './footer.css'
import {Typography} from '@material-ui/core'
import resumeData from "../../utils/resumeData"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>{resumeData.name}</Typography>  

            </div>
            <div className='footer-right'>
                <Typography className='footer_copyright'>
                    Designed and Developed by <a href="/" target="_blank">Ray Kim</a>
                    <br/>
                    
                </Typography>
            </div>
        </div>

    )
}

export default Footer;