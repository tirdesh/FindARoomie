import { Numbers } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { error } from "console";
import React, { useState } from "react";
import { ReactElement } from "react";

const SignUpCard: React.FC = ():ReactElement =>{
    // const [firstName, ]  
    
    const [userNameError,setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPassError] = useState("");
    const [changePassErr, setChangePassErr] = useState("");
    const [ifUserName,setIfUserName] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleFirstName = (event: any)=>{
        setFirstName(event.target.value);
    }
    const handleLastName = (event: any)=>{
        setLastName(event.target.value);
    }

    const handleUserNameTF = (event:any) =>{
        setUsername(event.target.value);
        
        if(event.target.value.length<5 && Boolean(event.target.value)){
            setUsernameError("Should be greater than 5 characters");
            setIfUserName(false);
        }else if(event.target.value.length>=5){
            setUsernameError("");
            setIfUserName(true);
        }else{
            setUsernameError("");
            setIfUserName(false);
        }
    }

    const checkAvailablity = (event:any)=>{
            alert(username+" Checks If this username is present in DB");
    }

    const handlePhoneChange = (event:any) => {
        setUserPhone(event.target.value);
        // Remove any non-numeric and non-plus characters
        const sanitizedValue = event.target.value.replace(/[^0-9+]/g, '');
        // Update the input field
        event.target.value = sanitizedValue;
        event.target.variant = "standard";
      };

    const handleEmailChange = (event:any)=>{
        setEmail(event.target.value);
        const emailRegEx: RegExp = new RegExp(/\S+@\S+\.\S+/);
        if(!emailRegEx.test(event.target.value) && Boolean(event.target.value)){
            setEmailError("Invalid Email");
        }else{
            setEmailError("");
        }
    }
    const handlePasswordChange = (event:any)=>{
        setPassword(event.target.value);
        if(event.target.value.length<8 && Boolean(event.target.value)){
            setPassError("Should be greater than 8 characters");
        }else{
            setPassError("");
        }
    }
    const handleConfirmPasswordChange = (event:any) =>{
        setConfirmPassword(event.target.value);
        if(event.target.value != password && Boolean(event.target.value)){
            setChangePassErr("Password Doesn't Match");
        }else{
            setChangePassErr("");
        }
    }
    const handleSubmit = (event:any) => {
        if(!Boolean(firstName) 
            || !Boolean(lastName) 
            || !Boolean(username) 
            || !Boolean(email) 
            || !Boolean(userPhone) 
            || !Boolean(password) 
            || !Boolean(confirmPassword) 
            || Boolean(userNameError)){
            alert("PLEASE ENTER ALL THE DETAILS");
        } else{
            
        }
    };

    return(
        <form>
        <Grid  container direction="column"  alignItems="center" spacing={3}>
            
            <Grid item alignSelf="center">
                <Typography variant="h4">SignUp </Typography>
            </Grid>
            
            <Grid item>
                <TextField label="First Name" type="text" variant="outlined" onChange={handleFirstName}></TextField>
            </Grid>
            <Grid item>
                <TextField label="Last Name" type="text" variant="outlined" onChange={handleLastName}></TextField>
            </Grid>
            <Grid item>
                <TextField error={Boolean(userNameError)}  helperText={userNameError} label="User Name" variant="outlined" onChange={handleUserNameTF} fullWidth></TextField><br />
                {ifUserName?(
                    <Button size="small" sx={{marginTop: 1}} onClick={checkAvailablity} variant="outlined" color="primary"> Check If Available</Button> 
                ):(null)}
            </Grid>
            
            <Grid item>
                <TextField  label="Phone" type="tel"  variant="outlined" onChange={handlePhoneChange}></TextField>
            </Grid>
            <Grid item>
                <TextField error={Boolean(emailError)}  helperText={emailError} label="Email" variant="outlined" onChange={handleEmailChange}></TextField>
            </Grid>
            <Grid item>
                <TextField error={Boolean(passwordError)}  helperText={passwordError} label="Password" type="password" variant="outlined" onChange={handlePasswordChange}></TextField>
            </Grid>
            <Grid item>
                <TextField error={Boolean(changePassErr)} helperText={changePassErr} label="Confirm Password" variant="outlined" onChange={handleConfirmPasswordChange}></TextField>
            </Grid> 
            
            <Grid item>
                <Button size="large" variant="contained" type="submit" onClick={handleSubmit} color="primary"> SignUp</Button> 
            </Grid>
            
            
        </Grid>
        </form>
    );
}

export default SignUpCard;