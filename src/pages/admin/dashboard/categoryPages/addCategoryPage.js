import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const categoryaddpageSchema = yup
  .object()
  .shape({
    categoryName1: yup.string().required("Name is required"),
    file1: yup.mixed().required("Upload a file"),
    // .test("fileSize", "The file is too large", (value) => {
    //   return value && value[0].size <= 2000000;
    // })
    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // })
    categoryName2: yup.string().required("Name is required"),
    file2: yup.mixed().required("Upload a file"),
    // .test("fileSize", "The file is too large", (value) => {
    //   return value && value[0].size <= 2000000;
    // })
    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // })
  })
  .required();

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categoryaddpageSchema),
  });

  const handleCategoryAddpage = ({ categoryName1, file1, file2 }) => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", categoryName1);
    bodyFormData.append("image", file1);
    bodyFormData.append("sub1", file2);
    // console.log("CategoryAddpage Details:", data);
    console.log("category", categoryName1);
    axios
      .post("http://localhost:4000/category", bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("Response=>>", response);
      })
      .catch((err) => {
        //handle error
        console.log("Errorss=>>", err);
      });
  };
  return (
    <form onSubmit={handleSubmit(handleCategoryAddpage)}>
      <div>
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
        <Grid item xs={6}>
          <h1>Subcategory</h1>
        </Grid>
        <Grid item xs={6}>
          <AddIcon
            color="primary"
            style={{ fontSize: 25, backgroundColor: "red" }}
            onClick={() => console.log("Yessss")}
          />
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
        <button className="btn btn-primary">remove</button>
      </Grid>

      <Grid className="my-5">
        <Button variant="outlined">Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          submit
        </Button>
      </Grid>
    </form>
  );
};

export default AddCategory;
