import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import GetStarted from '@/components/GetStarted';
import Heading from '@/components/Heading';
import IntroText from '@/components/IntroText';
import SubHeading from '@/components/SubHeading';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
        }}
      >
        <Heading />
        <SubHeading />
        <IntroText />
        <GetStarted />
      </Box>
    </Container>
  );
}
