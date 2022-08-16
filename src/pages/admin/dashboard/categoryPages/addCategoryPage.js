import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addCategoryPage.styles.scss";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import "./addCategoryPage.styles.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
  const navigate = useNavigate();

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
                <Button variant="outlined" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
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
