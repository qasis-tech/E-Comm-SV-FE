import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const UserDetails = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{ flexGrow: 1 }}
          noValidate
          autoComplete="off"
        >
          <h3>User Details</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-read-only-input"
                label="ID"
                defaultValue="#89033"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue="Vaishna"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue="vaishna@gmail.com"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-read-only-input"
                label="Phone Number"
                defaultValue="+91-76490254"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Address"
                defaultValue="jhbguydfwdixkwsuxdsuhxsx"
                multiline
                rows={4}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-read-only-input"
                label="Location"
                defaultValue="Kaloor"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UserDetails;
