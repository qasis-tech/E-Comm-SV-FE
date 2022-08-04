import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const CategoryAdd = () => {
  return (
    <form>
      <div>
        <h1>Category</h1>
        <TextField fullWidth variant="outlined" label="Name" />
        <TextField fullWidth variant="outlined" type="file" />
      </div>
      <div>
        <h1>Subcategory</h1>
        <TextField fullWidth variant="outlined" label="Name" />
        <TextField fullWidth variant="outlined" type="file" />
      </div>
      <Button variant="contained" color="primary">
        submit
      </Button>
    </form>
  );
};

export default CategoryAdd;
