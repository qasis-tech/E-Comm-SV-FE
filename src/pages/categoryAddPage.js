import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const categoryaddpageSchema = yup
  .object()
  .shape({
    categoryName1: yup.string().required("name is required"),
    file1: yup.mixed().required("Upload a file"),
    // .test("fileSize", "The file is too large", (value) => {
    //   return value && value[0].size <= 2000000;
    // })
    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // })
    categoryName2: yup.string().required("name is required"),
    file2: yup.mixed().required("Upload a file"),
    // .test("fileSize", "The file is too large", (value) => {
    //   return value && value[0].size <= 2000000;
    // })
    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // })
  })
  .required();

const CategoryAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categoryaddpageSchema),
  });

  const handleCategoryAddpage = (data) => {
    console.log("CategoryAddpage Details:", data);
  };
  return (
    <form onSubmit={handleSubmit(handleCategoryAddpage)}>
      <div>
        <h1>Category</h1>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          {...register("categoryName1")}
          error={errors?.categoryName1}
        />
        <p>{errors?.categoryName1?.message}</p>
        <TextField
          fullWidth
          variant="outlined"
          type="file"
          {...register("file1")}
        />
        <p>{errors?.file1?.message}</p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h1>Subcategory</h1>
        </Grid>
        <Grid item xs={2}>
          <AddIcon color="primary" />
        </Grid>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          {...register("categoryName2")}
          error={errors?.categoryName2}
        />
        <p>{errors?.categoryName2?.message}</p>
        <TextField
          fullWidth
          variant="outlined"
          type="file"
          {...register("file2")}
        />
        <p>{errors?.file2?.message}</p>
      </Grid>
      <Button variant="outlined">Cancel</Button>
      <Button type="submit" variant="contained" color="primary">
        submit
      </Button>
    </form>
  );
};

export default CategoryAdd;
