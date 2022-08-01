import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function LoginPage() {
    return (
      <div >
        <h1>LoginPage</h1>
        <Checkbox {...label} disabled checked />
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

      </div>
    );
  }
  
  export default LoginPage;