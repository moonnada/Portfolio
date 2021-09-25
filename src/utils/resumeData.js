import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
<<<<<<< HEAD
import { Facebook } from '@material-ui/icons';
import { Language, WebOutlined, YouTube } from '@material-ui/icons';
import InstagramIcon from '@mui/icons-material/Instagram';
=======
import { Language, WebOutlined, Facebook, Instagram } from '@material-ui/icons';

>>>>>>> divided_contract

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Ray Kim',
    title: 'Full Stack Developer',
    location: 'San Jose, CA',
    email: 'kimbm2014@gmail.com',
    address:'689 S Berendo st Los Angeles, CA',
    socials: {
<<<<<<< HEAD
        instagram : {
            link: 'https://www.instagram.com/ray_mooon.kim/',
            text: 'Instagram',
            icon: <InstagramIcon />
        },
        facebook : {
            link: 'https://www.facebook.com/profile.php?id=100002035722914',
            text: 'Facebook',
            icon: <Facebook />
        },
        

=======
        instagram: {
            link:'https://www.instagram.com/ray_mooon.kim/',
            icon: <Instagram />
        },
        facebook: {
            link:'https://www.facebook.com/profile.php?id=100002035722914',
            icon: <Facebook />
        },
>>>>>>> divided_contract
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
     about: "Hi, my name if Ray and I am currently looking for an internship position for summer 2022. I have worked as a Software Engineer Trainee at IBM Accelerate Software Track and had an internship at StemAway. My experiences have given me experiences in full-stack development with web frameworks such as ReactJS for front-end, and MongoDB and Node.js for back-end. I love to learn new stuff and apply the skills, especially in my field!",

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
            tag: 'React',
            images: [
                'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
                'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
            ],
            title: 'project1',
            caption: 'A short descroption',
            desc: 'this is my first project. please fill it in',
            links:[
                
                {link:'https://www.google.com', icon: <GitHubIcon/>},
                {link:'https://www.google.com', icon: <Language/>}
            ]
        },
        {
            tag: 'React',
            images: [
                'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
                'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
                'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
                'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
            ],
            title: 'project2',
            caption: 'A short descroption',
            desc: 'this is my first project. please fill it in',
            links:[
<<<<<<< HEAD
                
=======
>>>>>>> divided_contract
                {link:'https://www.google.com', icon: <GitHubIcon/>},
                {link:'https://www.google.com', icon: <Language/>}
            ]
        },
        {
            tag: 'React',
            images: [
                'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
            ],
            title: 'project3',
            caption: 'A short descroption',
            desc: 'this is my first project. please fill it in',
            links:[
<<<<<<< HEAD
               
=======
>>>>>>> divided_contract
                {link:'https://www.google.com', icon: <GitHubIcon/>},
                {link:'https://www.google.com', icon: <Language/>}
            ]
        },
        {
            tag: 'Java',
            images: [ 
                'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
            ],
            title: 'JAVA project1',
            caption: 'A short descroption',
            desc: 'this is my first project. please fill it in',
            links:[
<<<<<<< HEAD
                
=======
>>>>>>> divided_contract
                {link:'https://www.google.com', icon: <GitHubIcon/>},
                {link:'https://www.google.com', icon: <Language/>}
            ]
        },
        {
            tag: 'iOS',
            images: [
                'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
            ],
            title: 'project1',
            caption: 'A short descroption',
            desc: 'this is my first project. please fill it in',
            links:[
<<<<<<< HEAD
                
=======
>>>>>>> divided_contract
                {link:'https://www.google.com', icon: <GitHubIcon/>},
                {link:'https://www.google.com', icon: <Language/>}
            ]
        },
    ]


}
