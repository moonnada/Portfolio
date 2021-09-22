import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default {
    name: 'Ray Kim',
    title: 'Full Stack Developer',
    location: 'San Jose, CA',
    email: 'kimbm2014@gmail.com',
    socials: {
        linkedin: {
            link: 'https://www.linkedin.com/in/ray-kim0727/',
            text: 'Linkedin',
            icon: <LinkedInIcon />
        },
        github: {
            link: 'https://github.com/moonnada',
            text: 'GitHub',
            icon: <GitHubIcon />
        }
    }
}