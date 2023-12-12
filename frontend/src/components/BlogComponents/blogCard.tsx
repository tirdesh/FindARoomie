import { Accordion, AccordionDetails, AccordionSummary, Grid, Paper, Typography } from "@mui/material";
import { escape } from "querystring";
import React, { useState } from "react";
import { ReactElement } from "react";

const BlogCard: React.FC = ():ReactElement =>{
    const [contentDisplay, setDisplay] = useState(false);
    const [btnText, setBtnText] = useState("Show this blog");
    const handleBlogClick = ()=>{
        if(contentDisplay){
            setDisplay(false);
        }
        else{
            setDisplay(true);
        }
    }
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
                <Typography style={{padding:10, opacity: 1,transition: 'opacity 0.5s ease-in-out',}} variant="body1"  fontSize="1rem" fontStyle="inherit">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut magnam nostrum consequatur architecto culpa dolores optio, sequi consequuntur, commodi necessitatibus tempora! Repellat non quia consequuntur veritatis aliquid odio minima quasi quaerat ut! Sunt quisquam nihil, eaque similique velit blanditiis distinctio ipsum delectus maiores accusantium est sit nam eligendi, perferendis eum obcaecati nesciunt libero, dolorum necessitatibus repudiandae saepe deserunt ducimus. Quibusdam, doloremque nisi. Culpa deleniti deserunt quia, soluta inventore molestias obcaecati minus rerum, ipsam totam reprehenderit non accusamus ratione pariatur ab ullam dolore molestiae ex aliquam consectetur sunt sapiente recusandae! Repellat officia eius sed suscipit. Amet officiis veniam odit minus vel, perferendis dolor fuga hic, id corrupti illum autem laborum illo ducimus error asperiores! Dignissimos, cum facilis inventore facere optio voluptate dolorum corrupti adipisci accusamus eos eius magni pariatur, explicabo sunt, perferendis ut officia ea reprehenderit vitae esse soluta sit! Libero, quidem laboriosam atque, rerum in quas fugiat soluta voluptatum mollitia eligendi labore beatae nemo ex nihil, deleniti quam eaque explicabo pariatur odit ipsum minima autem maiores omnis! Magnam omnis aut beatae alias, minus nostrum ipsum, neque ducimus consectetur dolores corrupti officiis provident officia soluta est. Harum, magnam odit. Debitis adipisci voluptatem aliquid et corrupti suscipit maxime facilis voluptas optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut magnam nostrum consequatur architecto culpa dolores optio, sequi consequuntur, commodi necessitatibus tempora! Repellat non quia consequuntur veritatis aliquid odio minima quasi quaerat ut! Sunt quisquam nihil, eaque similique velit blanditiis distinctio ipsum delectus maiores accusantium est sit nam eligendi, perferendis eum obcaecati nesciunt libero, dolorum necessitatibus repudiandae saepe deserunt ducimus. Quibusdam, doloremque nisi. Culpa deleniti deserunt quia, soluta inventore molestias obcaecati minus rerum, ipsam totam reprehenderit non accusamus ratione pariatur ab ullam dolore molestiae ex aliquam consectetur sunt sapiente recusandae! Repellat officia eius sed suscipit. Amet officiis veniam odit minus vel, perferendis dolor fuga hic, id corrupti illum autem laborum illo ducimus error asperiores! Dignissimos, cum facilis inventore facere optio voluptate dolorum corrupti adipisci accusamus eos eius magni pariatur, explicabo sunt, perferendis ut officia ea reprehenderit vitae esse soluta sit! Libero, quidem laboriosam atque, rerum in quas fugiat soluta voluptatum mollitia eligendi labore beatae nemo ex nihil, deleniti quam eaque explicabo pariatur odit ipsum minima autem maiores omnis! Magnam omnis aut beatae alias, minus nostrum ipsum, neque ducimus consectetur dolores corrupti officiis provident officia soluta est. Harum, magnam odit. Debitis adipisci voluptatem aliquid et corrupti suscipit maxime facilis voluptas optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut magnam nostrum consequatur architecto culpa dolores optio, sequi consequuntur, commodi necessitatibus tempora! Repellat non quia consequuntur veritatis aliquid odio minima quasi quaerat ut! Sunt quisquam nihil, eaque similique velit blanditiis distinctio ipsum delectus maiores accusantium est sit nam eligendi, perferendis eum obcaecati nesciunt libero, dolorum necessitatibus repudiandae saepe deserunt ducimus. Quibusdam, doloremque nisi. Culpa deleniti deserunt quia, soluta inventore molestias obcaecati minus rerum, ipsam totam reprehenderit non accusamus ratione pariatur ab ullam dolore molestiae ex aliquam consectetur sunt sapiente recusandae! Repellat officia eius sed suscipit. Amet officiis veniam odit minus vel, perferendis dolor fuga hic, id corrupti illum autem laborum illo ducimus error asperiores! Dignissimos, cum facilis inventore facere optio voluptate dolorum corrupti adipisci accusamus eos eius magni pariatur, explicabo sunt, perferendis ut officia ea reprehenderit vitae esse soluta sit! Libero, quidem laboriosam atque, rerum in quas fugiat soluta voluptatum mollitia eligendi labore beatae nemo ex nihil, deleniti quam eaque explicabo pariatur odit ipsum minima autem maiores omnis! Magnam omnis aut beatae alias, minus nostrum ipsum, neque ducimus consectetur dolores corrupti officiis provident officia soluta est. Harum, magnam odit. Debitis adipisci voluptatem aliquid et corrupti suscipit maxime facilis voluptas optio.
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