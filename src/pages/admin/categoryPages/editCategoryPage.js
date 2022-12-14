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
import { URLS } from "../../../../config/urls.config";

const AddCategory = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      mainCategory: null,
      imageCategory: null,
      subcategory: [{ subCategoryName: "", imageFile: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcategory",
  });

  const watchFieldArray = watch("subcategory");
  const controlledFields = fields?.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const handleSubmitApi = (params) => {
    console.log("params", params);
    const { imageCategory, mainCategory, subcategory } = params;
    const formData = new FormData();

    formData.append("label", mainCategory);
    formData.append("image", imageCategory[0]);

    for (const values of subcategory) {
      formData.append(`${values.subCategoryName}`, values.imageFile[0]);
    }

    setTimeout(() => {
      console.log("Payload", formData);
    }, 1000);

    axios
      .post(`${URLS.category}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Category Add ===> ", res);
        // navigate to cat list page
      })
      .catch((err) => {
        console.log("err in Category Add", err);
      });
  };

  return (
    <div className="add-category">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <div className="category-form-section ">
            <form onSubmit={handleSubmit((res) => handleSubmitApi(res))}>
              <div className="main-heading">
                <h3 className="heading">Category</h3>
              </div>
              <Grid container spacing={2} className="category-section">
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    size="small"
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
                  {getValues("imageCategory") ? (
                    <>
                      <span>{getValues("imageCategory[0].name")}</span>
                      <Button
                        variant="contained"
                        component="label"
                        className="mt-3"
                        onClick={() => reset({ imageCategory: null })}
                      >
                        remove
                      </Button>
                    </>
                  ) : (
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
                  )}
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
                        append({ subCategoryName: "", imageFile: "" })
                      }
                    />
                  </Grid>

                  {/* sub category list */}
                  {controlledFields?.map((list, index) => {
                    return (
                      <Grid key={list.id} item xs={12}>
                        <Grid item xs={12}>
                          <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            size="small"
                            {...register(
                              `subcategory.${index}.subCategoryName`
                            )}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="subCategoryName"
                            render={({ message }) => <p>{message}</p>}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {list?.imageFile?.length ? (
                            <>
                              <span>{list?.imageFile[0]?.name}</span>
                              <Button
                                variant="contained"
                                component="label"
                                className="mt-3"
                                onClick={() => remove(index)}
                              >
                                remove
                              </Button>
                            </>
                          ) : null}
                          <Button
                            variant="contained"
                            fullWidth
                            component="label"
                            className="mt-3"
                          >
                            Upload Image
                            <TextField
                              label="file"
                              type="file"
                              variant="outlined"
                              fullWidth
                              hidden
                              {...register(`subcategory.${index}.imageFile`)}
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
