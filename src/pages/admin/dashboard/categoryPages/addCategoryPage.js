import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import axios from "axios";
import { useState } from "react";
import "./addCategoryPage.styles.scss";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcategory",
  });
  // const [duplicate, setduplicate] = useState([{ title: "" }]);
  // const [subC, setSubc] = useState(0);
  // const handleAddbutton = (event) => {
  //   let data = [...duplicate];
  //   data.push({ title: "" });
  //   setduplicate(data);
  //   setSubc((subC) => subC + 1);
  // };
  // const handleRemovebutton = (index) => {
  //   const newdata = [...duplicate];
  //   newdata.splice(index, 1);
  //   setduplicate(newdata);
  // };
  // const handleCategoryAdd = ({
  //   mainCategory,
  //   subCategory,
  //   categoryImage,
  //   file2,
  // }) => {
  //   var bodyFormData = new FormData();
  //   bodyFormData.append("name", mainCategory);
  //   bodyFormData.append("image", categoryImage);
  //   bodyFormData.append("sub1", file2);
  //   // console.log("CategoryAddpage Details:", data);
  //   console.log("category", mainCategory);
  //   console.log("subcategory=>=>", subCategory);
  //   axios
  //     .post("http://localhost:4000/category", bodyFormData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then((response) => {
  //       console.log("Response=>>", response);
  //     })
  //     .catch((err) => {
  //       //handle error
  //       console.log("Errorss=>>", err);
  //     });
  // };
  return (
    <div className="add-category">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <Grid item xs={6} className="category-form-section ">
            <form onSubmit={handleSubmit(console.log)}>
              <h3 className="heading">Category</h3>
              <div>
                <TextField
                  fullWidth
                  label="Name"
                  {...register("mainCategory", {
                    required: "This is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="mainCategory"
                  render={({ message }) => <p>{message}</p>}
                />
                <Button variant="contained" fullWidth component="label">
                  Upload Image
                  <input
                    {...register("imageCategory", {
                      required: "This is required.",
                    })}
                    type="file"
                    hidden
                  />
                </Button>

                <ErrorMessage
                  errors={errors}
                  name="imageCategory"
                  render={({ message }) => <p>{message}</p>}
                />

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
                      onClick={() => append({})}
                    />
                  </Grid>
                </Grid>
                {fields.map((list, index) => {
                  return (
                    <Grid key={list.id} item xs={12}>
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
                        {...register(`subCategoryName ${index}`)}
                      />

                      <Button
                        {...register(`imageFile ${index}`)}
                        variant="contained"
                        fullWidth
                        component="label"
                      >
                        Upload Image
                        <input type="file" hidden />
                      </Button>

                      {fields.length > 1 && (
                        <button
                          onClick={() => remove(index)}
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
