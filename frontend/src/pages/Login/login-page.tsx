import React, { useState } from "react";
import { ReactElement } from "react";
import './login.css';
import { Button, Paper, TextField, Typography } from "@mui/material";
import { stat } from "fs";

const Login: React.FC = ():ReactElement => {
    let loginState: Boolean = true;
    const [loginS, setSignup] = useState(false);
    const [btnText, setBtnText] = useState("SignUp");
    const handleSignUpBt = () =>{
        if(loginS){
            setSignup(false);
        }
        else{
            setSignup(true);
        }
        if(btnText==="SignUp"){ setBtnText("Login")}
        else{setBtnText("SignUp")}
    }
    return(
        <div>
            <div className="login-div">
                    <h1>Login Page</h1>
                    <div className="login-box">
                    <Paper sx={{paddingY:2}} elevation={3}>
                        <Typography variant="h4">
                            Login
                        </Typography>
                        
                        { loginS ? ( <h1>Login State</h1> ): (<h1>SignUp</h1>) }

                        <TextField sx={{marginTop:2, marginBottom:2}} label="username/email" variant="outlined">
                        </TextField>
                        <br />
                        <TextField sx={{marginTop:2, marginBottom:2}}   label="Password" variant="outlined">
                        </TextField>
                        <br />
                        
                        <Button onClick={handleSignUpBt} variant="contained" color="primary"> {btnText} </Button>
                        
                    </Paper>
                    </div>
                    
                </div> 
        </div>
        
)
        
}

export default Login