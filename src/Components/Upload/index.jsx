import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material';

// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import storage  from '../../firebase'

const Upload = () => {
    const [images, setImages] = React.useState(null);
    const fileInput = React.useRef();
  
    const handleChange = (e) => {
      fileInput.current.click()
      console.log(e.target.value, e.target, e.target.file)
      if(e.target.value){
        setImages(e.target.value)
      }
      // fileInput.current.click()
    }
    const handleUpload = (e) => {
      console.log(e.target, images)
      // eslint-disable-next-line no-undef
      const uploadTask = storage.ref(`files/${images.name}`).put(images);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error)
        },
        () => {
          // eslint-disable-next-line no-undef
          storage
            .ref("files")
            .child(images.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url)
            })
        }
      )
    }
  return (
    <Grid container>
    <Grid item xs={6}>
      <input type="file" onChange={handleChange}  ref={fileInput} value={images} />
    <Button variant={'text'} onClick={handleUpload}> 
    {/* <CloudUploadIcon />  */}
    Upload Image</Button>
    </Grid>
    <Grid item xs={6}>
    <Button 
    variant="contained" 
    color="primary" 
    onClick={handleChange}
  >
     {/* <CloudUploadIcon /> */}
  </Button>

  <input 
    ref={fileInput} 
    type="file" 
    style={{ display: 'none' }} 
  />
    </Grid>
  </Grid>
  )
}

export default Upload