import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
            <Grid item xs={6}>
              <TextField
                id="outlined-read-only-input"
                label="Location"
                defaultValue="Kaloor"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Primary Address"
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
                fullWidth
                id="outlined-multiline-static"
                label="Other Address"
                defaultValue="jhbguydfwdixkwsuxdsuhxsx"
                multiline
                rows={4}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-read-only-input"
                label="Pin"
                defaultValue="680586"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UserDetails;
