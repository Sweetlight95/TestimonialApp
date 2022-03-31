import React from 'react'
import { Grid, Button, Typography } from '@mui/material'
import Prize from "../img/sta.svg"

const Congratulation = () => {

  return (

    <Grid container backgroundColor="#e5e5e5" minHeight = "100vh" justifyContent="center">
        <Grid item backgroundColor="#ffffff" borderRadius="16px" height="710px" width="527px" marginTop="1rem">
          <Grid>
            <img src={Prize} className="img"/>
            <Typography fontWeight="bold" fontSize="28px" lineHeight="34px" height="68px" textAlign="center" width="270px" marginTop="40px" marginLeft="137px">Thank you for sharing your story!</Typography>
            <Typography fontSize="16px" lineHeight="28px" height="84px" width="356px" textAlign="center" marginTop="54px" marginLeft="96px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </Grid>
          <Button className="btn1" >
                Close
          </Button> 
    </Grid>
    </Grid>
   
  )
}

export default Congratulation
