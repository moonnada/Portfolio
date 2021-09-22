import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import CustomTimeLine from '../Timeline/Timeline'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Ray Kim</Typography>
                <Typography className='title'>Title</Typography>
            </div>

            <figure className='profile_image'>
                <img src={require('../../asserts/images/profile.jpg').default} alt="1"/>
              
                
            </figure>

                
            <div className='profile_information'>
                <CustomTimeLine />
                <br/>
                <button>my button</button>

            </div>

        </div>
    )
}

export default Profile;