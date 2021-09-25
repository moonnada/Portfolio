import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import CustomTimeLine from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonIcon from '@mui/icons-material/Person';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from "../Button/PfButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import myPdf from "../../asserts/images/Resume.pdf";

const CustomTimelineItem = ({ title, text, link }) => (

    

    <TimelineItem>
        <TimelineSeparator className={'separator_padding'}>
          <TimelineDot variant={'outlined'} className={'timeline_dot'}/>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent className="timeline_content">
            
            { link ? (
            <Typography className="timelineItem_text">
                <span>{title}:</span>{"  "}
                <a href={link} target="_blank">
                    {text}
                </a>
            </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title}</span> {text}
                </Typography>
            )}
        </TimelineContent>

    </TimelineItem>
);

const Profile = () => {

    const sendResume = () => {
        console.log("resume");
    }

    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={require('../../asserts/images/profile.jpg').default} alt="1"/>
            </figure>

                
            <div className='profile_information'>
                <CustomTimeLine icon={<PersonIcon />}> 
                    <CustomTimelineItem title='Name:' text={resumeData.name}/>
                    <CustomTimelineItem title='Title:' text={resumeData.title}/>
                    <CustomTimelineItem title='Location:' text={resumeData.location}/>
                </CustomTimeLine>
                <div className='button_container'>
                    <a href={myPdf} download="Resume.pdf" style={{textDecoration : "none"}}> 
                        <CustomButton  href={myPdf} download="Resume.pdf" func={sendResume} text={'Download Resume'} icon={<GetAppIcon/>}/>
                     </a>


                </div>

            </div>

        </div>
    )
}

export default Profile;