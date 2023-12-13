import React, { useState } from "react";
import { ReactElement } from "react";
import './login.css';
import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import { stat } from "fs";
import LoginCard from "../../components/Login/loginCard";
import SignUpCard from "../../components/Login/signUpCard";

const LoginPage: React.FC = ():ReactElement => {
    let loginState: Boolean = true;
    const [loginS, setLoginS] = useState(true);
    const [btnText, setBtnText] = useState("Don't Have An Account?, Click here to Sign UP");
    const handleSignUpBt = () =>{
        if(loginS){
            setLoginS(false);
            setBtnText("Already Have An Account?, Click Here to Sign In")
        }
        else{
            setLoginS(true);
            setBtnText("Don't Have An Account?, Click here to Sign Up")
        }
    }
    return(
            <div className="login-div">
                <div className="login-box">
                <Paper sx={{padding:5, borderRadius: 4}} elevation={3}>
                    { loginS ? ( 
                        <LoginCard ></LoginCard>
                        ): (
                            <SignUpCard></SignUpCard>
                            ) }
                    <br />
                    <Link className="hoverHand" onClick={handleSignUpBt} variant="body1">{btnText} </Link>
                </Paper>
                </div>
            </div> 
        )
};

export default LoginPage;