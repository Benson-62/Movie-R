import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Addmovie = () => {
    var[inputs, setInputs]=useState({MovieName:"",Language:"",Trailer:"",CastCrew:"",Review:""});
    const inputHandler=(e)=> {
        console.log(e.target.value);
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    };
  return (
    <div>
        <center>
            <Box id='hi'>
    <Typography variants="h3">Enter Movie Details </Typography>
     <br/><br/>
     <TextField variant="standard" label='MovieName'onChange={inputHandler}
        name="MovieName"
        value={inputs.MovieName}/>
     <br/><br/>
     <TextField id="standard-basic" label="Language" variant="standard" onChange={inputHandler}
        name="Language"
        value={inputs.Language}/> 
     <br/><br/>
     <TextField id="standard-basic" label="Trailer" variant="standard" onChange={inputHandler}
        name="Trailer"
        value={inputs.Trailer}/> 
     <br/><br/>
     <TextField id="standard-basic" label="Cast&Crew" variant="standard" onChange={inputHandler}
        name="CastCrew"
        value={inputs.CastCrew}/> 
     <br/><br/>
     <TextField id="standard-basic" label="Review" variant="standard" onChange={inputHandler}
        name="Review"
        value={inputs.Review}/> 
     <br/><br/>
     <Button variant="outlined">Submit</Button>&nbsp;&nbsp;
     </Box>
     </center>
    </div>
  )
}

export default Addmovie
