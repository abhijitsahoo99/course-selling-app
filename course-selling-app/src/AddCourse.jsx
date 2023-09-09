import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card, Typography} from '@mui/material';
import {useState} from "react";
import './AddCourse.css'

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    return <div>
    <div className='courseheading'>
        <Typography variant = {"h6"}>Please add your courses</Typography>
       </div>
        <div className='box'>
            <Card className='card' variant="outlined">
            <TextField onChange = {(e)=> setTitle(e.target.value)} 
            sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Title" variant="outlined" />
            <TextField onChange = {(e)=> setDescription(e.target.value)} 
            sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Description" variant="outlined" />
             <TextField onChange = {(e)=> setImage(e.target.value)} 
            sx={{paddingBottom : 2}} fullWidth={true} id="outlined-basic" label="Image Link" variant="outlined" />

            <Button size={"large"} variant="contained"
             onClick = {() => {
                function callback2(){
                    alert("Course Added")
                }

                function callback1(res){
                    res.json().then(callback2)
                }
                fetch("http://localhost:3000/admin/courses", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description,
                        imageLink: image,
                        published: true
                    }),
                    headers : {
                        "content-type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }).then(callback1)
            }}>Add Course</Button>
            </Card>
        </div>
    </div>
}
export default AddCourse;