import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewmovie = () => {
    var [pro,setPro]=useState([]);
    useEffect(()=>{
        axios.get("https://freetestapi.com/api/v1/movies")
        .then((res)=>{
            console.log(res);
            setPro(res.data)

        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div>
          <Grid container spacing={2}>
        {pro.map((val,i)=>{
            return(
                <Grid item xs={12} md={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.poster}
        
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {val.trailer}
        {val.runtime}
        {val.awards}
        {val.language}
        {val.country}
        {val.boxOffice}
        {val.production}
        {val.website}
        
    
        
        </Typography>
      </CardContent>
    </Card>
                </Grid>
                
            )
        })}

      </Grid>
    </div>
  )
}

export default Viewmovie
