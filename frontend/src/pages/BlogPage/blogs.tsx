import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactElement } from "react";
import './blogPage.css'

import BlogCard from "../../components/BlogComponents/blogCard";
import { loginTrail } from "../../services/base-services";

const BlogPage: React.FC = ():ReactElement=>{
    
   return (<div className="blogs-body">
        <Grid
            className="blogs grid container"
            container
            direction="column"
            alignItems="stretch"
            spacing={3}
        >
            <Grid item>
                <Typography variant="h4">
                    Want to share something regarding roomhunt?
                </Typography>
                <Typography variant="h6">
                    Or you can share about roommates? Just blog away
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" size="large">
                    Post a blog
                </Button>
            </Grid>

            <Grid>
                <Typography variant="h6">
                    blah
                </Typography>
            </Grid>

            <Grid item className="blogCardGridItem">
                    <BlogCard/>
            </Grid>

            
        </Grid>

    </div>
)}

export default BlogPage;