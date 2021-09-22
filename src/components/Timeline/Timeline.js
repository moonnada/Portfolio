import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './Timeline.css'
import { Typography } from '@material-ui/core';

const CustomTimeline = ({title}) => {

    return (
        <Timeline className={'timeline'}>

        {/* item header */}
        <TimelineItem className={'timeline_firstItem'}>
          <TimelineSeparator>
            <TimelineDot className={'timeline_dot_header'} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography variant="h6" className={'timeline_header'}>{title}</Typography></TimelineContent>
        </TimelineItem>

        {/* remaining items */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={'timeline_dot'}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        
      </Timeline>
    )
}

export default CustomTimeline