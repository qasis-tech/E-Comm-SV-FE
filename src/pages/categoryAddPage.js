import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const CategoryAdd = () => {
  return (
    <form>
      <div>
        <h1>Category</h1>
        <TextField fullWidth variant="outlined" label="Name" />
        <TextField fullWidth variant="outlined" type="file" />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h1>Subcategory</h1>
        </Grid>
        <Grid item xs={2}>
          <AddIcon color="primary" />
        </Grid>
        <TextField fullWidth variant="outlined" label="Name" />
        <TextField fullWidth variant="outlined" type="file" />
      </Grid>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained" color="primary">
        submit
      </Button>
    </form>
  );
};

export default CategoryAdd;
