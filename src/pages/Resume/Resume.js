import React from 'react'
import {Grid, Typography} from "@material-ui/core"
import resumeData from "../../utils/resumeData"
import './resume.css'

const Resume = () => {
    return (
        <>
            {/* About me */}
            <Grid container className="section pb_45">
                <Grid item className='section_title mb_30' >
                    <span></span>
                    
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography className='aboutme_text' variant='body2'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* Education and experiences */}
            <Grid container className="section">

            </Grid>

            {/* Services */}
            <Grid container className="section">

            </Grid>

            {/* Skills */}
            <Grid container className="section">

            </Grid>

            {/* Contact */}
            <Grid container className="section">

            </Grid>

        </>
    )
}

export default Resume;