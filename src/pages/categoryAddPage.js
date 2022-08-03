import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const CategoryAdd = () => {
  return (
    <form>
      <TextField
        label="With normal TextField"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
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
