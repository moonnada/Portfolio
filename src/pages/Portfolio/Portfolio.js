import React,{useState} from 'react'
import "./portfolio.css"
import {Grid, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Typography, Grow, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core"
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/imageGallery/ImageGallery';

const Portfolio = () => {

    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    
    return (
        <Grid container spacing={1} className="section pb_45 pt_45">
            {/* title */}
            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* tabs */}
            <Grid item xs={12}>
                <Tabs 
                value={tabValue} 
                indicatorColor='white' 
                className="customTabs" 
                onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='All' value='All' className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />
                    {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={tabValue == tag ? 'customTabs_item active' : 'customTabs_item'}/>
                    ))}
                </Tabs>
            </Grid>
        
            {/* projects */}
            <Grid item xs={12}>
                <Grid container spacing={6}>
                    {resumeData.projects.map(project => (
                        <div>
                        {tabValue == project.tag || tabValue == 'All' ? (
                        <Grid item xs={12} sm={6} md={6} lg={6}>

                        
                        <Grid item>
                        <Grow in timeout={1000}>
                            <Card className="customCard" onClick={()=> setProjectDialog(project)}>
                                <CardActionArea>
                                    <CardMedia className="customCard_image" image={project.images[0]} title={project.title}/>
                                    <CardContent> 
                                        <Typography variant="body2" className="customCard_title">{project.title}</Typography>
                                        <Typography variant="body2" className="customCard_caption">{project.caption}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grow>
                        </Grid>
                        </Grid>
                        ) : null}
                        
                        </div>
                    ))}
                </Grid>

            </Grid>


            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className="projectDialog" maxWidth={"lg"} fullWidth>
            <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
            <DialogContent style={{height: "70vh"}}>
                {
                    projectDialog.images && (
                        <ImageGallery images={projectDialog.images}/>
                    )
                }
                <br />
                <Typography className="projectDialog_desc">{projectDialog.desc}</Typography>
                
            </DialogContent>
            <DialogActions className="projectDialog_actions">
                {projectDialog?.links?.map((link) => (
                    <a href={link.link} target="_blank" className="projectDialog_icon">{link.icon}</a>
                ))}
            </DialogActions>
        </Dialog>
        </Grid>
    );
};

export default Portfolio;