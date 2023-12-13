import { Accordion, AccordionDetails, AccordionSummary, Grid, Paper, Typography } from "@mui/material";
import { escape } from "querystring";
import React, { useState } from "react";
import { ReactElement } from "react";
import './blogCard.css';

const BlogCard: React.FC = ():ReactElement =>{
    const [contentDisplay, setDisplay] = useState(false);
    const [btnText, setBtnText] = useState("Show this blog");
    return (
        <Paper sx={{borderRadius:5,
            ':hover': {
              boxShadow: 5,
              cursor: "pointer",
               // theme.shadows[20]
            },
          }} className="blogPaper" elevation={2}>
            <Accordion>
                <AccordionSummary>
                    <Grid sx={{marginTop:3, padding: 4}} container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h4"> Blog Title</Typography>
                        </Grid>
                        <Grid item  alignSelf="flex-end">
                        <Typography variant="caption" fontSize="1rem" fontStyle="italic"> Author of the Blog</Typography>
                        </Grid>
                        <Grid item  alignSelf="flex-end">
                        <Typography variant="caption"  fontSize="1rem" fontStyle="italic"> 2023-10-16 date of creation</Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{padding:3}}>
                <Typography style={{padding:5, opacity: 1,transition: 'opacity 0.5s ease-in-out', textAlign:'justify'}} variant="body1"  fontSize="1rem" fontStyle="inherit">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero maxime consequuntur nihil cumque, ducimus a non cupiditate deserunt amet nostrum minima, voluptatum quis hic impedit obcaecati modi illo voluptas
                   placeat sunt sapiente tempore repellendus quia! Quasi dicta veniam eius iste cupiditate numquam? Architecto quisquam delectus aperiam voluptatibus consequuntur veniam ducimus ipsam. Amet voluptates sapiente 
                   commodi esse beatae similique, libero ipsum a sunt, nostrum odio suscipit explicabo praesentium repellendus excepturi. Commodi doloremque porro hic dolor officiis consectetur atque id veniam repellat adipisci, 
                   aperiam, modi velit laborum quibusdam eum accusantium perferendis maiores, sint voluptates rerum explicabo cum odio. Ipsum temporibus exercitationem provident!
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Grid sx={{backgroundColor:"whitesmoke", padding:2, borderRadius:"0 0 5 5", ':hover':{transition:"0.5s", backgroundColor: "rgba(0,0,0,0.1)" }}}  alignSelf="stretch">
                    <a></a>
                    <Typography variant="button">
                        Open Comments
                    </Typography>
                </Grid>

            
        </Paper>
    )
    
};

export default BlogCard;