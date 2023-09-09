import Button from '@mui/material/Button';
import {Typography} from "@mui/material";
import './Appbar.css';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Appbar()
{
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        console.log("token - " + localStorage.getItem("token"));
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);
    if (userEmail) {
        return <div className = 'appbar'>
            <div>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>
            <div style={{display: "flex"}}>
                <div>
                    {userEmail}
                </div>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/";
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return (
                <div className='appbar'>
                <div>
                    <Typography sx={{margin: 2 , marginTop: 1 , padding: 1}} variant={"h5"}>Coursera</Typography>
                </div>
                 <div>
                    <Button sx={{marginRight: 2 , marginTop: 1}} size={"large"} variant="contained" onClick={()=> navigate("/signup")}>Sign up</Button>
                    <Button sx={{marginRight: 2 , marginTop: 1}} size={"large"} variant="contained" onClick={()=> navigate("/signin")}>Sign in</Button>
                </div>
            </div>
    )
}
}
export default Appbar;