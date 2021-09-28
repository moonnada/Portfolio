import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Language, WebOutlined, Facebook, Instagram } from '@material-ui/icons';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Ray Kim',
    title: 'SWE Junior Student',
    location: 'San Jose CA',
    email: 'kimbm2014@gmail.com',
    address:'689 S Berendo st Los Angeles CA',
    socials: {
        instagram: {
            link:'https://www.instagram.com/ray_mooon.kim/',
            icon: <Instagram />
        },
        facebook: {
            link:'https://www.facebook.com/profile.php?id=100002035722914',
            icon: <Facebook />
        },
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
     about: "Hi, my name is Ray and I am currently looking for an internship position for summer 2022. I have worked as a Software Engineer Trainee at IBM Accelerate Software Track and had an internship at StemAway. My experiences have given me experiences in full-stack development with web frameworks such as ReactJS for front-end, and MongoDB and Node.js for back-end. I love to learn new stuff and apply the skills, especially in my field!",

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
    ],

    projects: [
        {
            tag: 'Web',
            images: [
                'https://i.imgur.com/QtvZyoN.png',
                'https://i.imgur.com/tM3cWWu.jpg',
                'https://i.imgur.com/305gsKR.png',
                'https://i.imgur.com/kOt26Ir.png',
                'https://i.imgur.com/04zsyJu.png'

            ],
            title: 'Blog',
            caption: 'MERN Full-Stack Blog Website',
            desc: 'Users can register, login and update their account in this website, and then they can write or edit their personal blog. Moreover users can see different users` posts as well' ,
            links:[
                
                {link:'https://github.com/moonnada/Blog-app/blob/master/README.md', icon: <GitHubIcon/>},
                {link:'https://blogooo.herokuapp.com/', icon: <Language/>}
            ]
        },
        {
            tag: 'Web',
            images: [
                'https://camo.githubusercontent.com/aab00add3598f5acce26f781012f06cfbe4b489f1dbf9cc914f1835736f97897/68747470733a2f2f692e6962622e636f2f474a777979396d2f4276392d4a73332d514c4f4c592d48442e6a7067',
               
            ],
            title: 'Fin Chat',
            caption: 'Full Realtime Firebase Chat Application',
            desc: 'With social authentication including Google and Facebook using Firebase, online statuses, great design, and functionality, image support, sound notifications, the ability to create multiple rooms.',
            links:[
                {link:'https://github.com/moonnada/Fin-Chat', icon: <GitHubIcon/>},
                {link:'https://finchatgo.netlify.app', icon: <Language/>}
            ]
        },
        {
            tag: 'Web',
            images: [
                'https://i.imgur.com/1V02mbc.png',
                'https://i.imgur.com/ojN28P8.png',
                'https://i.imgur.com/R10x04m.png',
                'https://i.imgur.com/BjwNsqJ.png',
                'https://i.imgur.com/gfOLq1q.png',
                'https://i.imgur.com/TrPI1ia.png',
                'https://i.imgur.com/QlilYqc.png',
                'https://i.imgur.com/RcIXcFX.png',
                'https://i.imgur.com/Wo3TwpF.png',


            ],
            title: 'MindEraser - Web',
            caption: 'Mental Health Platform',
            desc: 'People can post stresses that they want to forget, and stresses would be blurred out little by little and finally they are erased in 3 days.',
            // links:[
            //     {link:'', icon: <GitHubIcon/>},
            //     {link:'', icon: <Language/>}
            // ]
        },
        {
            tag: 'iOS',
            images: [
                'https://i.imgur.com/QH9KhMz.png',
                'https://i.imgur.com/R1mK5cR.png'
            ],
            title: 'Flix',
            caption: 'Movie Trailer Application',
            desc: 'Flix app to allow users to get more information about a particular movie in a movie details screen. Used Collection View to view movies in a grid view from different endpoints of the MovieDB API.',
            links:[
                {link:'https://github.com/moonnada/Flix', icon: <GitHubIcon/>}
                
            ]
        },
        {
            tag: 'iOS',
            images: [
                'https://i.imgur.com/sTStX6s.png',
                'https://i.imgur.com/NNG9ebZ.png',
                'https://i.imgur.com/b6X25Va.png',
            ],
            title: 'Tweet',
            caption: 'Basic twitter app to view, compose, favorite, and retweet tweets.',
            desc: 'Flix app to allow users to get more information about a particular movie in a movie details screen. Used Collection View to view movies in a grid view from different endpoints of the MovieDB API.',
            links:[
                {link:'https://github.com/moonnada/twitter_ios_starter/blob/master/README.md', icon: <GitHubIcon/>}
                
            ]
        },
        {
            tag: 'iOS',
            images: [
                'https://i.imgur.com/9cmrhZa.png',
                'https://i.imgur.com/QjVHgwn.png',
                'https://i.imgur.com/fszhqdh.png',
                'https://i.imgur.com/HdfpLHm.png',
                'https://i.imgur.com/15ORQcb.png',
                'https://i.imgur.com/LysHdEF.png',
                'https://i.imgur.com/lqGNydw.png',
                'https://i.imgur.com/CaFWTnc.png'

            ],
            title: 'MindEraser - iOS',
            caption: 'Mental Health Platform.',
            desc: 'People can post stresses that they want to forget, and stresses would be blurred out little by little and finally they are erased in 3 days.',
            links:[
                
            ]
        },
    ]


}
