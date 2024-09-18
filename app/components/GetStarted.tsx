import Button from '@mui/material/Button';
import NextLink from 'next/link';

export default function GetStarted() {
  return (
    <Button
      variant="contained"
      href="/calculator"
      color="secondary"
      component={NextLink}
    >
      Get Started
    </Button>
  );
}
