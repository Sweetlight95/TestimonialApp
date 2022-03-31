import React from 'react'
import { Grid, Typography, Button, TextField, FormControlLabel, RadioGroup, Radio} from '@mui/material'
import './form.css'
import { makeStyles } from '@mui/styles'
import { FiPaperclip, FiX } from 'react-icons/fi'
import {useNavigate} from 'react-router-dom'


const Form = () => {

  const useStyles = makeStyles ({
    input: {
      height:"62px",
      width:"463px",
      
    }
  })

  const navigate = useNavigate();

  const txt = useStyles();

  return (
    <Grid container backgroundColor="#e5e5e5" minHeight = "100vh" justifyContent="center">
        <Grid item backgroundColor="#ffffff" borderRadius="16px" height="829px" width="527px" marginTop="1rem">
            <Typography fontSize="28px" fontWeight="bold" marginLeft="66px" marginTop="57px">Share your amazing story!</Typography>
            <Typography color="#676767" lineHeight="16px" marginLeft="34px" marginTop="50px">Upload your Picture</Typography>
            <Grid  marginLeft="34px" marginTop="12px" >
              <TextField className={txt.input} label="Choose Image" id="outlined-basic" variant="outlined" />
              <span className="clip">{<FiPaperclip/>}</span>
            </Grid>
          <Grid display="flex" marginTop="28px">
               
                <Grid backgroundColor="rgba(254, 254, 254, 0.3)" boxSizing="border-box"
                        borderRadius="8px" height="62px" width="221px" marginLeft="32px" >
                 <Typography fontSize="14px" color="#676767" lineHeight="16px" >First Name</Typography>        
                <TextField />
                </Grid>
                <Grid  backgroundColor="rgba(254, 254, 254, 0.3)" color="white" boxSizing="border-box"
                        borderRadius="8px" height="62px" width="221px" marginLeft="20px">
                    <Typography fontSize="14px" color="#676767" lineHeight="16px" >Last Name</Typography>
                    <TextField />
                
                </Grid>
            </Grid>
            <Grid>
                <Typography fontSize="14px" color="#676767" lineHeight="16px" marginLeft="34px" marginTop="30px" >Share your story</Typography>
                <TextField className="fie" />
            </Grid>
            <Grid marginLeft="305px" color="#676767" >
              <RadioGroup
                  row
  
                  >
                  <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                  <FormControlLabel value="vendor" control={<Radio />} label="Vendor" />
              </RadioGroup>
              </Grid>
      <Typography color="#676767" lineHeight="16px" marginLeft="34px" position="relative"bottom="28px">What did you interact with Vasiti as? </Typography>
            <Typography color="#676767" lineHeight="16px" marginLeft="34px" position="relative"bottom="15px" >City or Higher Institution(for Students</Typography>
            <TextField className='fill' />
          <Button className="btn" onClick={()=>navigate("/congratulation")}>
                Share your story!
          </Button>
        </Grid>
    </Grid>
  )
}


export default Form
