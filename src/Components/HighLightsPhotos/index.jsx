import * as React from 'react';
import { Box, Grid, Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import storage  from '../../firebase'

export default function HighlightsPhotos() {
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
    const uploadTask = storage.ref(`files/${images.name}`).put(images);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
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
    <Box sx={{ width: 1200, height: 1450, overflowY: 'scroll', padding: '100px', margin: '20px' }}>
      <Grid container>
        <Grid item xs={6}>
          <input type="file" onChange={handleChange}  ref={fileInput} value={images} />
        <Button variant={'text'} onClick={handleUpload}> <CloudUploadIcon /> Upload Image</Button>
        </Grid>
        <Grid item xs={6}>
        <Button 
        variant="contained" 
        color="primary" 
        onClick={handleChange}
      >
         <CloudUploadIcon />
      </Button>

      <input 
        ref={fileInput} 
        type="file" 
        style={{ display: 'none' }} 
      />
        </Grid>
      </Grid>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => console.log("clicked image list", item.img, item.title)}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/wedding-clinto-chippy.appspot.com/o/4C2A%20(58).jpg?alt=media&token=18e45ce7-a56b-45b5-b195-994f31460c58',
    title: 'Bed',
  },
  {
    img: 'https://drive.google.com/file/d/1sDKJQhDijjHDmIT2pr8Mr7EUdOuWHIIv/view?usp=sharing',
    title: 'Books',
  },
  {
    img: 'gs://wedding-clinto-chippy.appspot.com/4C2A (58).jpg',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
