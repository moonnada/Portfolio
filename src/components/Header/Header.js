import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink, withRouter} from "react-router-dom"
import { HomeRounded, Telegram } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import CustomButton from "../Button/PfButton";
import "./header.css"

const Header = (props) => {
    const pathName = props?.location?.pathname;

    const sendEmail = () =>{
        window.location.assign("mailto:kimbm2014@gmail.com");
    }
    return (
        <Navbar expand="lg" sticky="top" className="header">
            {/* Home Link */}
            <Nav.Link as={NavLink} to='/' className="header_navlink">
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/* Resume */}
                    <Nav.Link 
                        as={NavLink} 
                        to="/" 
                        className={pathName === '/' ? 'header_link_active' : 'header_link'}>
                        Resume
                    </Nav.Link>

                    {/* Poftfolio */}
                    <Nav.Link 
                        as={NavLink} 
                        to="/portfolio" 
                        className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>
                        Portfolio
                    </Nav.Link>

                    {/* contract */}
                    <Nav.Link 
                        as={NavLink} 
                        to="/contract" 
                        className={pathName === '/contract' ? 'header_link_active' : 'header_link'}>
                        Contact
                    </Nav.Link>

                </Nav>

                <div className="header_right">
                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
                    ))}
                    {/* <CustomButton text={"Hire Me"} icon={<Telegram />} func={sendEmail}/> */}
                </div>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default withRouter(Header);