import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactElement } from "react";

const LoginCard: React.FC = ():ReactElement =>{
    return(
        <Grid  container direction="column" alignItems="center" spacing={3}>
            <Grid item>
                <Typography variant="h4">Login </Typography>
            </Grid>
            <Grid item>
                <TextField  label="username/email" variant="outlined">
            </TextField>
            </Grid>
            <Grid item>
                <TextField sx={{marginBottom:1}} label="Password" variant="outlined"></TextField><br/>
                <Link  alignSelf="center" className="hoverHand"> Forgot Password?</Link>
            </Grid>
            <Grid item>
                <Button size="large" variant="contained" color="primary"> Login</Button> 
            </Grid>
        </Grid>
    );
}

export default LoginCard;