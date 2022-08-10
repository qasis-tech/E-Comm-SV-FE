import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import "./addCategoryPage.styles.scss";

const categoryaddpageSchema = yup
  .object()
  .shape({
    mainCategory: yup.string().required("Name is required"),
    file1: yup.mixed().required("Upload a file"),
    // .test("fileSize", "The file is too large", (value) => {
    //   return value && value[0].size <= 2000000;
    // })
    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // })
    subCategory: yup.string().required("Name is required"),
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
  const [duplicate, setduplicate] = useState([{ title: "" }]);
  const [subC, setSubc] = useState(0);
  const handleAddbutton = (event) => {
    let data = [...duplicate];
    data.push({ title: "" });
    setduplicate(data);
    setSubc((subC) => subC + 1);
  };
  const handleRemovebutton = (index) => {
    const newdata = [...duplicate];
    newdata.splice(index, 1);
    setduplicate(newdata);
  };
  const handleCategoryAddpage = ({
    mainCategory,
    subCategory,
    file1,
    file2,
  }) => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", mainCategory);
    bodyFormData.append("image", file1);
    bodyFormData.append("sub1", file2);
    // console.log("CategoryAddpage Details:", data);
    console.log("category", mainCategory);
    console.log("subcategory=>=>", subCategory);
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
    <div className="add-category">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <Grid item xs={6} className="category-form-section ">
            <form onSubmit={handleSubmit(handleCategoryAddpage)}>
              <h3 className="heading">Category</h3>
              <div>
                <TextField
                  fullWidth
                  label="Name"
                  {...register("mainCategory")}
                  error={errors?.mainCategory}
                />
                <p>{errors?.mainCategory?.message}</p>
                <Button variant="contained" fullWidth component="label">
                  Upload Image
                  <input type="file" hidden />
                </Button>
                {/* <TextField
                  fullWidth
                  id="outlined-required"
                  label="Upload Image"
                  type="file"
                  {...register("file1")}
                />
                <p>{errors?.file1?.message}</p> */}
              </div>
              <Grid container spacing={2} marginTop={4}>
                <Grid container spacing={2} paddingLeft={2}>
                  <Grid item xs={10}>
                    <h3>Subcategory</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <AddIcon
                      color="primary"
                      style={{ fontSize: 25, backgroundColor: "red" }}
                      onClick={() => handleAddbutton()}
                    />
                  </Grid>
                </Grid>
                {duplicate.map((pname, index) => {
                  return (
                    <Grid key={index} item xs={12}>
                      {/* {duplicate.length - 1 === index && (
                            <AddIcon
                              color="primary"
                              style={{ fontSize: 25, backgroundColor: "red" }}
                              onClick={(e) => handleAddbutton(e)}
                            />
                          )} */}

                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Name"
                        {...register("subCategory")}
                        error={errors?.subCategory}
                      />
                      <p>{errors?.subCategory?.message}</p>
                      <Button variant="contained" fullWidth component="label">
                        Upload Image
                        <input type="file" hidden />
                      </Button>
                      <p>{errors?.file2?.message}</p>
                      {duplicate.length > 1 && (
                        <button
                          onClick={() => handleRemovebutton(index)}
                          className="btn btn-primary"
                        >
                          remove
                        </button>
                      )}
                    </Grid>
                  );
                })}
              </Grid>

              <Grid className="my-5">
                <Button variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained" color="primary">
                  submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddCategory;
