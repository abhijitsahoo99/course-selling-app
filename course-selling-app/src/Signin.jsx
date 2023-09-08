import './Signin.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';


function Signin (){
    return <div>
    <div className='heading'>
        <Typography variant = {"h6"}>Welcome back. Sign in below</Typography>
    </div>
    <div className='box'>
        <Card className='card' variant="outlined">
            <TextField sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
            <TextField sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
            <Button size={"large"} variant="contained">Signin</Button>
        </Card>
    </div>
    </div>
}
export default Signin;