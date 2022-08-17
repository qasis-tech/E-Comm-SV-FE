import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import "./addCategoryPage.styles.scss";
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
  } = useForm({
    defaultValues: {
      subcategory: [{ subCategoryName: "addwd", imageFile: "null" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcategory",
  });
  const navigate = useNavigate();

  return (
    <div className="add-category">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <div className="category-form-section ">
            <form onSubmit={handleSubmit(console.log)}>
              <div className="main-heading">
                <h3 className="heading">Category</h3>
              </div>
              <Grid container spacing={2} className="category-section">
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
              <hr />
              <Grid
                container
                spacing={2}
                marginTop={4}
                className="subcategory-section"
              >
                <Grid container spacing={2} paddingLeft={2}>
                  <Grid item xs={10}>
                    <h3>Subcategory</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <AddIcon
                      color="primary"
                      className="add-icon-section"
                      onClick={() =>
                        append({ subCategoryName: " sfsf", imageFile: "vgsgx" })
                      }
                    />
                  </Grid>

                  {fields.map((list, index) => {
                    return (
                      <Grid key={list.id} item xs={12}>
                        <Grid item xs={12}>
                          <TextField
                            {...register(
                              `subcategory.${index}.subCategoryName`
                            )}
                            fullWidth
                            variant="outlined"
                            label="Name"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="subCategoryName"
                            render={({ message }) => <p>{message}</p>}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            fullWidth
                            component="label"
                          >
                            Upload Image
                            <TextField
                              {...register(`subcategory.${index}.imageFile`)}
                              fullWidth
                              variant="outlined"
                              hidden
                              label="file"
                              type="file"
                            />
                          </Button>
                          <ErrorMessage
                            errors={errors}
                            name="imageFile"
                            render={({ message }) => <p>{message}</p>}
                          />
                        </Grid>
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
              </Grid>
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button onClick={() => navigate(-1)}>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="btn-button"
                  >
                    submit
                  </Button>
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default AddCategory;
