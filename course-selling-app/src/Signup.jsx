import './Signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';
import {useState} from "react";

function Signup (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div>
    <div className='heading'>
        <Typography variant = {"h6"}>Welcome to Coursera. Sign up below</Typography>
    </div>
    <div className='box'>
        <Card className='card' variant="outlined">
            <TextField onChange = {(e)=> setEmail(e.target.value)} 
            sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
            <TextField onChange = {(e)=> setPassword(e.target.value)} 
            sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
            <Button size={"large"} variant="contained"
            onClick = {() => {
                function callback2(data){
                    localStorage.setItem("token" , data.token);
                    window.location = "/"
                }

                function callback1(res){
                    res.json().then(callback2)
                }
                fetch("http://localhost:3000/admin/signup", {
                    method : "POST",
                    body : JSON.stringify({
                        username : email,
                        password : password
                    }),
                    headers : {
                        "content-type": "application/json"
                    }
                }).then(callback1)
            }}
            >Sign up</Button>
        </Card>
    </div>
    </div>
}
export default Signup;