import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setUser } from "../../redux/slices/user-slice";
import { RootState } from '../../redux/store';
import { useNavigate } from "react-router-dom";


const LoginCard: React.FC = ():ReactElement =>{
    const userlogger = useSelector((state: RootState)=>state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

// Login Api Call
    const handleSumbit = (event: any) =>{
        event.preventDefault();
        const apiURL = "http://localhost:3002/api/users/api/login";
        if(!email || !password){
            alert("Please Enter All the fields");
        }else{
            axios
            .post(apiURL,{email: email, password: password})
            .then((response)=>{
                    dispatch(setUser(response.data.data.token))
                    navigate("/");
                })
            .catch((error)=>{
                console.log(error);
                alert(error.response.data.message);
            });
        }
        };

        const showUser = () =>{
            if(userlogger.userId){
                alert(userlogger.userId);
            }
        }

    return(
        <div>
            <form onSubmit={handleSumbit}>
                <Grid  container direction="column" alignItems="center" spacing={3}>
                <Grid item>
                    <Typography variant="h4">Login </Typography>
                </Grid>
                <Grid item>
                    <TextField  label="Email" variant="outlined" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}>
                </TextField>
                </Grid>
                <Grid item>
                    <TextField sx={{marginBottom:1}} label="Password" type="password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}></TextField><br/>
                    <Link  alignSelf="center" className="hoverHand"> Forgot Password?</Link>
                </Grid>
                <Grid item>
                    <Button size="large" variant="contained" color="primary" type="submit"> Login</Button> 
                </Grid>
            </Grid>
            </form>
        </div>
        
    );
}

export default LoginCard;