import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WebOutlined } from '@material-ui/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Ray Kim',
    title: 'Full Stack Developer',
    location: 'San Jose, CA',
    email: 'kimbm2014@gmail.com',
    address:'689 S Berendo st Los Angeles, CA',
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
    },
     about: "I am currently looking for an internship position for summer 2022. I have worked as a Software Engineer Trainee at IBM Accelerate Software Track and had an internship at StemAway. My experiences have given me experiences in full-stack development with web frameworks such as ReactJS for front-end, and MongoDB and Node.js for back-end. I love to learn new stuff and apply the skills, especially in my field!",

     experiences: [
         {
             title: 'Software Developer Trainee',
             company:'IBM Accelerate Software Track',
             date: '06.2021 - 08.2021',
             descs: [
                 'Led a team of 10 people through biweekly web development labs focusing on full-stack development(react.js for Front-end and Node.js and Express.js for Back-end) and cloud with IBM engineers.', 
             ] 
         },
         {
            title: 'Full Stack Developer Intern',
            company: 'StemAway',
            date: '06.2021 - 08.2021',
            descs: 'Configured and built a theme and plugin for an open source community forum software, Discourse and delivered project reports and timeline updates during a weekly executive group meeting, responding to questions and feedback.',
        },
        {
            title: 'Software Developer Trainee',
            company: 'CodePath iOS University',
            date: '01.2021 - 05.2021',
            descs: "Committed 20+ hours a week participating in Facebook-based workshops and building 5 iOS applications such as Instagram, Twitter with RESTful API clients and completed with honors (110%).",
        },
     ],


     education: [
        {
            title: 'San Jose State University',
            date: 'Graduation: May 2023',
            gpa: 'GPA : 3.66',
            desc: 'B.S. Software Engineering',  
        },
        
    ],


    services: [
        {
            title: "Web Development",
            icon: <WebOutlined />
        },
        {
            title: "Web Dev",
            icon: <WebOutlined />
        },
        {
            title: "Web Dev",
            icon: <WebOutlined />
        }
        
    ],

    skills: [
        {
            title: "LANGUAGES",
            desc: [
                "Java",
                "JavaScript",
                "Swift"
            ]
        }, 
        {
            title: 'FRONT-END', 
            desc: [
                "ReactJS",
                "JavaScript",
                "Bootstrap",
                "Material UI",
            ],
        },
        {
            title: "BACK-END",
            desc: [
                "Node.js",
                "MongoDB",
                "Express.js"
            ]
        },
        {
            title: "TECHNOLOGIES",
            desc: [
                "Firebase",
                "RESTful API",
                "MATLAB"
            ]
        }
    ]


}
