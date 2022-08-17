import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

import Chippy from '../../Assets/Marriage/Chippy.JPG'
import Abraham from '../../Assets/Marriage/Abraham.JPG'
import Chindu from '../../Assets/Marriage/Chindu.JPG'
import Chindu2 from '../../Assets/Marriage/Chindu2.JPG'
import Chindu3 from '../../Assets/Marriage/Chindu3.JPG'
import Chindu4 from '../../Assets/Marriage/Chindu4.JPG'
import Chippy2 from '../../Assets/Marriage/Chippy2.JPG'
import Chippy3 from '../../Assets/Marriage/Chippy3.JPG'
import Chippy4 from '../../Assets/Marriage/Chippy4.JPG'
import Chippy5 from '../../Assets/Marriage/Chippy5.JPG'
import Chippy7 from '../../Assets/Marriage/Chippy7.JPG'
import Chippy8 from '../../Assets/Marriage/Chippy8.JPG'
import Chippy9 from '../../Assets/Marriage/Chippy9.JPG'
import Chippy10 from '../../Assets/Marriage/Chippy10.JPG'
import ChippyCicily from '../../Assets/Marriage/ChippyCicily.JPG'
import ChippyFamily from '../../Assets/Marriage/ChippyFamily.JPG'
import Cicily from '../../Assets/Marriage/Cicily.JPG'
import Clinto from '../../Assets/Marriage/Clinto.JPG'
import Clinto2 from '../../Assets/Marriage/Clinto2.JPG'
import Clinto3 from '../../Assets/Marriage/Clinto3.JPG'
import Clinto4 from '../../Assets/Marriage/Clinto4.JPG'
import ClintoChindu from '../../Assets/Marriage/ClintoChindu.JPG'
import ClintoChindu2 from '../../Assets/Marriage/ClintoChindu2.JPG'
import ClintoChippy from '../../Assets/Marriage/ClintoChippy.JPG'
import ClintoChippy2 from '../../Assets/Marriage/ClintoChippy2.JPG'
import Family from '../../Assets/Marriage/Family.JPG'
import Mini from '../../Assets/Marriage/Mini.JPG'
import MinuSneha from '../../Assets/Marriage/MinuSneha.JPG'
import ShinyTommy from '../../Assets/Marriage/ShinyTommy.JPG'
import Threesama from '../../Assets/Marriage/Threesama.JPG'




function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h3" component="div">
            {`Clinto & Chippy`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
      <Box sx={{ width: 1200, height: 1450, overflowY: 'scroll', padding: '100px', margin: '20px' }}>
      <Typography variant="h3">{`Wedding`}</Typography>
     
     
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
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}



const itemData = [
  {
    img: Chippy,
    title: 'chippy',
  },
  {
    img: Clinto,
    title: 'Clinto',
  },
  {
    img: Chippy2,
    title: 'Chippy',
  },
  {
    img: Clinto4,
    title: 'Clinto',
  },
  {
    img: Chippy3,
    title: 'Chippy',
  },
  {
    img: Clinto3,
    title: 'Clinto',
  },
  {
    img: ChippyFamily,
    title: 'Chippy & Family',
  },
  {
    img: Abraham,
    title: 'Abraham',
  },
  {
    img: Mini,
    title: 'Mini',
  },
  {
    img: Threesama,
    title: 'Threesama',
  },
  {
    img: ShinyTommy,
    title: 'Shiny Tommy',
  },
  {
    img: ClintoChindu,
    title: 'Clinto & Chindu',
  },
  {
    img: ClintoChindu2,
    title: 'Clinto & Chindu',
  },
  {
    img: ChippyCicily,
    title: 'Chippy & Cicily',
  },
  {
    img: ClintoChippy,
    title: 'Chippy & Clinto',
  },
  {
    img: ClintoChippy2,
    title: 'Chippy & Clinto',
  },
  {
    img: MinuSneha,
    title: 'Minu & Sneha',
  },
  {
    img: Cicily,
    title: 'Cicily',
  },
  {
    img: Chindu,
    title: 'Chindu',
  },
  {
    img: Chippy7,
    title: 'Chippy',
  },
  {
    img: Chippy4,
    title: 'Chippy',
  },
  {
    img: Chippy5,
    title: 'Chippy',
  },
  {
    img: Chippy8,
    title: 'Chippy',
  },
  {
    img: Chippy9,
    title: 'Chippy',
  },
  {
    img: Chippy10,
    title: 'Chippy',
  },
  {
    img: Clinto2,
    title: 'Clinto',
  },
  {
    img: Family,
    title: 'Family',
  },
  {
    img: Chindu2,
    title: 'Chippy',
  },
  {
    img: Chindu3,
    title: 'Chippy',
  },
  {
    img: Chindu4,
    title: 'Chippy',
  },
];
