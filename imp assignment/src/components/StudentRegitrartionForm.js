import { Box, Button, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function StudentRegitrartionForm() {
  let [CourseName,SetCourseName]=useState(["Flutter Course","MERN stack","Web development","Full stack developer"])
  let [Section,SetSection]=useState(["A","B","C"])
  let [Age,SetAge]=useState("0")
  let GenerateAge=(a) =>{
    let d1=new Date()  
    let d2=new Date(a)
    let diff=d1.getFullYear()-d2.getFullYear()
    SetAge(diff)
    }
  return (
    <div>
<Box sx={{backgroundColor: '#E5E4E2',width: "1349px",height: "1400px",position:"absolute"}}>
<Box sx={{marginTop:"28px"}}>
  <Typography variant="h2" sx={{textAlign:"center",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold",color:"#0047AB"}}>Student Regitrartion Form</Typography>
</Box>
<Box sx={{borderLeft:"18px solid #0047AB",marginLeft:"200px",borderRadius:"20px",marginTop:"60px",backgroundColor: 'white',height:"1100px",width:"1000px"}}>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography type="text" sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>First Name</Typography>
  <TextField placeholder="e.g Mohammad Talal" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-164px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Last Name</Typography>
  <TextField type="text" placeholder="e.g Zafar" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Course</Typography>
  <TextField select label="Select Course" sx={{width:"300px",marginTop:"10px"}}size="normal">
    {
      CourseName.map((e,i)=>(
      <MenuItem key={i} value={e}>{e}</MenuItem>)
      )}</TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Section</Typography>
  <TextField select label="Select Section" sx={{width:"300px",marginTop:"10px"}}size="normal">
    {
      Section.map((e,i)=>(
      <MenuItem key={i} value={e}>{e}</MenuItem>)
      )}</TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Contact</Typography>
  <TextField type="number" placeholder="03xx-xxxxxxx"  sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>CNIC</Typography>
  <TextField type="number" placeholder="xxxxx-xxxxxxx-x" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography type="text" sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Father's Name</Typography>
  <TextField placeholder="e.g Mohammad Zafar" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Father's CNIC</Typography>
  <TextField type="number" placeholder="xxxxx-xxxxxxx-x" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Father's Contact</Typography>
  <TextField type="number" placeholder="03xx-xxxxxxx"  sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Emergency Contact</Typography>
  <TextField type="number" placeholder="03xx-xxxxxxx"  sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Date Of Birth</Typography>
  <TextField type="date" placeholder="03xx-xxxxxxx" onChange={(e)=>{GenerateAge(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Age</Typography>
  <TextField type="number" disabled  sx={{width:"300px",marginTop:"10px"}}size="normal" label={Age}/>
  </Box>
  <Box>
  <Button sx={{marginTop:"24px",marginLeft:"410px",width:"149px",height:"50px"}} variant="contained">Submit</Button>
  </Box>
</Box>
      </Box>
    </div>
  )
}
