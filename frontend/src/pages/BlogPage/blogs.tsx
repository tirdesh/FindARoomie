import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactElement } from "react";
import './blogPage.css'
import BlogCard from "../../components/BLogComponents/blogCard";

const BlogPage: React.FC = ():ReactElement=>(
    <div className="blogs-body">
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

            <Grid item className="blogCardGridItem">
                    <BlogCard/>
            </Grid>

        </Grid>

    </div>
)

export default BlogPage;