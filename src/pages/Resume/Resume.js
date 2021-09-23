import React from 'react'
import {Grid, Typography} from "@material-ui/core"
import resumeData from "../../utils/resumeData"
import CustomTimeline, {CustomTimeLineSeperator} from '../../components/Timeline/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './resume.css'
import { TimelineSeparator } from '@material-ui/lab';

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
                <Grid item className='section_title mb_30' >
                    <span></span>
                    
                    <h6 className="section_title_text">Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                    {/* working history */}
                        <Grid item sm={12} md={6}>

                            <CustomTimeline className="workTitle"
                            title='Work Experience' 
                            icon={<WorkIcon/>}> 
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem className="timeline_lists">
                                    
                                        <TimelineSeparator className="seperator_padding">
                                            <TimelineDot 
                                                variant="outlined"
                                                className="timeline_dot"
                                            />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_company">{experience.company}</Typography>
                                            <Typography className="timeline_title">{experience.title}</Typography>
                                            <Typography variant='caption' className="timeline_date">{experience.date}</Typography>
                                            <Typography variant='body2' className="timeline_desc">{experience.descs}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                    {/* Education */}
                        <Grid item sm={12} md={6}>
                        <CustomTimeline 
                            title='Education' 
                            icon={<SchoolIcon/>}> 
                                {resumeData.education.map((education) => (
                                    <TimelineItem className="timeline_lists">
                                    
                                        <TimelineSeparator className="seperator_padding">
                                            <TimelineDot 
                                                variant="outlined"
                                                className="timeline_dot"
                                            />
                                            <TimelineConnector />
                                        </TimelineSeparator>

                                        
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_company">{education.title}</Typography>
                                            <Typography variant='body2' className="timeline_major">{education.desc}</Typography>
                                            <Typography variant='caption' className="timeline_gradDate">{education.date}</Typography>
                                            <br/>
                                            <Typography variant='caption' className="timeline_date">{education.gpa}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>

                        </Grid>
                    </Grid>
                </Grid>
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