import React, { useEffect, useRef, useState } from 'react';
import { Typography, Button, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import './LandingPage.css';

interface Coordinates {
  x: number;
  y: number;
}

interface MouseCoords {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

type Props = {
  lineColor: string;
  backgroundColor: string
}

const CanvasBackground: React.FC<Props> = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log(props.lineColor);

  const circleArray: Coordinates[] = [];
  let mouseCoords: MouseCoords = { x: 0, y: 0, targetX: 0, targetY: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext('2d')!;
    
    const setDimensions = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initCircles();
    };

    const initCircles = () => {
      for (let i = 0; i < 100; i++) {
        let x = 0;
        let y = 0;
        while (x < canvas!.width * 0.2 || x > canvas!.width * 0.8) {
          x = Math.random() * canvas!.width;
        }
        while (y < canvas!.height * 0.2 || y > canvas!.height * 0.8) {
          y = Math.random() * canvas!.height;
        }
        circleArray.push({ x, y });
      }
    };

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    window.addEventListener('resize', setDimensions);
    window.addEventListener('mousemove', (e) => {
      mouseCoords.targetX = e.clientX - canvas!.width / 2;
      mouseCoords.targetY = e.clientY - canvas!.height / 2;
    });

    let frame = 0;
    let iteration = 0;

    const animate = () => {
      ctx.fillStyle = '#dcfe4a';
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      mouseCoords.x = lerp(mouseCoords.x, mouseCoords.targetX, 0.075);
      mouseCoords.y = lerp(mouseCoords.y, mouseCoords.targetY, 0.075);
      console.log(props.lineColor);
      for (let i = 0; i < iteration; i++) {
        const { x, y } = circleArray[i];
        ctx.beginPath();
        ctx.arc(x + mouseCoords.x, y + mouseCoords.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.moveTo(canvas!.width / 2, canvas!.height / 2);
        ctx.lineTo(x + mouseCoords.x, y + mouseCoords.y);
        ctx.strokeStyle = props.lineColor;
        ctx.stroke();
      }

      frame++;
      if (frame % 10 === 1 && iteration < circleArray.length) iteration++;
      requestAnimationFrame(animate);
    };

    setDimensions();
    animate();

    return () => {
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', (e) => {
        mouseCoords.targetX = e.clientX - canvas!.width / 2;
        mouseCoords.targetY = e.clientY - canvas!.height / 2;
      });
    };
  }, [props.lineColor]);

  return <canvas ref={canvasRef} className={`canvas-${props.backgroundColor}`}/>;
};

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const [changeCol,setThemeColor] = useState(true);
  const [textCol,setTextCol] = useState("light");
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const changeTheme = (event: any) =>{
    if(changeCol){
      setThemeColor(false);
      setTextCol("dark");
    }else{
      setThemeColor(true);
      setTextCol("light");
    }
  }
  return (
    <Container className={`landingBody-${textCol}`} maxWidth="lg" disableGutters>
      <Button size='large' variant='contained' color='secondary' onClick={changeTheme}>Theme</Button>
      {changeCol?(<CanvasBackground lineColor ={"rgba(171, 171, 171, 0.118)"} backgroundColor={'dark'}/>):(<CanvasBackground lineColor ={"rgba(51, 51, 51, 0.18 )"} backgroundColor={'light'}/>)}
        {/* <CanvasBackground themeColor ={themeColor}/> */}
      <Box className="hero-text">
        <Typography variant="h2" component="h1" gutterBottom className="hero__header">
          Find Your Perfect Space & Companion
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom className="hero__header">
          Effortlessly with Find a Roomie!
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large">
            Find Room
          </Button>
          <Button variant="contained" color="secondary" size="large" sx={{ marginLeft: '1em' }}>
            Post a Room
          </Button>
        </Box>
      </Box>
      {/* Additional content and layout goes here */}
    </Container>
  );
};

export default LandingPage;
