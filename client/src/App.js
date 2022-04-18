import './App.css';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useShortener } from './hook/useShortener';

function App() {

  const {
    url,
    shortUrl,
    handleOnChangeUrl,
    submitShortUrl,
    cleanInput
  } = useShortener()

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '55px',
          marginTop: '50px'
        }}>
          <Typography variant='h1' fontSize={40}>URL SHORTENER</Typography>
          <TextField value={url} onChange={handleOnChangeUrl}></TextField>
          <Button onClick={cleanInput}>Clean</Button>
          <Button onClick={submitShortUrl}>Short URL</Button>
          <Typography color={'gray'}>{shortUrl}</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
