import React from 'react'
import { Grid, Typography,TextField } from '@material-ui/core'
import CustomButton from "../../components/Button/PfButton"
import resumeData from '../../utils/resumeData'
import emailjs from "emailjs-com"
import "./contact.css"

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('gmail', 'template_x75v4vg', e.target, 'user_UFb7cvDUzJzmsuhqGsTjJ')
            .then(result => {
                alert('Message Sent, I\'ll get back to you shortly', result.text);
                },
                error => {
                    alert( 'An error occured, Plese try again',error.text)
                })
                e.target.reset();
    }

    return (
    <form onSubmit={sendEmail}> 
          {/* Contact */}
          <Grid container spacing={6} className="section pt_45 pb_45">
          {/*contack form  */}
          <Grid item xs={12} lg={7}>
              <Grid container>
                  <Grid item className="section_title mb_20">
                      <span></span>
                      <h6 className="section_title_text">Contact Form</h6>
                  </Grid>

                <form action="https://formsubmit.co/kimbm2014@gmail.com" method="POST">
                  <Grid item xs={12}>
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                              <TextField fullWidth name='name' label="Name" required/>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField fullWidth name='email' label="Email" required/>
                          </Grid>

                          <Grid item xs={12}>
                                <TextField fullWidth name="subject" label="Subject" required/>
                          </Grid>

                          <Grid item xs={12}>
                              <TextField fullWidth name='message' label="Message" multiline rows={4} required/>
                          </Grid>
                          <Grid item xs={12}>
                              <CustomButton text="Submit" />
                          </Grid>
                      </Grid>
                  </Grid>
                  </form>
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
</form>
    )
}
