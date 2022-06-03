import React from 'react'
import "./contract.css"
import { Grid,TextField, Typography } from '@material-ui/core'
import CustomButton from "../../components/Button/PfButton"
import resumeData from '../../utils/resumeData'
import emailjs from "emailjs-com"


export default function Contract() {

    function sendEmail(e) {
        e.preventDefault()// Prevents default refresh by the browser
        
        emailjs.sendForm('gmail', 'email_template', e.target, 'user_UFb7cvDUzJzmsuhqGsTjJ')
            .then(result => {
                alert('Message Sent, I\'ll get back to you shortly', result.text);
            }, error => {
                alert(error.text)
            })
        e.target.reset();
    }

    return (
        <div>
            {/* Contact */}
            <Grid container spacing={6} className="section pt_45 pb_45">

                {/*contack form  */}
                
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className="section_title mb_-20">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid>

                        <form className="form" onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Email" name="email" required/>
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Message" name="message" required></textarea>
                        </div>
                        <div className="col-12 pt-3 mx-auto">
                            <input type="submit" className="custom_btn sbBtn" value="Send Message"></input>
                        </div>
                    </div>
            </form>

                        {/* <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label="Name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label="Email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label="Message" multiline rows={4}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text="Submit" />
                                </Grid>
                            </Grid>
                        </Grid> */}
                    
                    </Grid>                     
                </Grid>
                    

                {/* contact info */}
                <Grid item xs={12} lg={5}>
                    <Grid item className="section_title mb_20">
                        <span></span>
                        <h6 className="section_title_text">Contact Information</h6>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container>

                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Address:</span> {resumeData.address}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Email:</span> {resumeData.email}
                                </Typography>
                            </Grid>
                            
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container className='contactInfo_socialsContainer'>
                            {Object.keys(resumeData.socials).map((key) => (
                                <Grid item className="contactInfo_social">
                                    <a href={resumeData.socials[key].link}>
                                        {resumeData.socials[key].icon}
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
                
            </Grid>
        </div>
    )
}
