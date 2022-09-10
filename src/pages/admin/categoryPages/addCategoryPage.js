import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useReactiveVar } from "@apollo/client";

import RouterList from "../../../routes/routerList";
import { URLS } from "../../../config/urls.config";
import { popupVar } from "../../../utils/globalVar";
import PopupAlert from "../../../components/popupAlerts";

import { Box, Grid, Button, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./addCategoryPage.styles.scss";
import "./addCategoryPage.styles.scss";

const AddCategory = () => {
  const navigate = useNavigate();
  const popups = useReactiveVar(popupVar);

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
      categoryImageFile: null,
      subcategory: [],
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
    const { categoryImageFile, mainCategory, subcategory } = params;
    const formData = new FormData();

    formData.append("label", mainCategory);
    formData.append("image", categoryImageFile[0]);
    if (subcategory) {
      for (const values of subcategory) {
        formData.append(`${values.subCategoryName}`, values.imageFile[0]);
      }
    } else {
    }

    axios
      .post(`${URLS.category}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.success) {
          navigate(
            `${RouterList.admin.admin}/${RouterList.admin.categoryList}`
          );
        }
      })
      .catch((err) => {
        console.log("Error in Category Add", err);
      });
  };

  return (
    <div className="add-category">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <div className="category-form-section col-md-8 col-lg-9 col-sm-10">
            <form onSubmit={handleSubmit((res) => handleSubmitApi(res))}>
              <div className="main-heading">
                <h5 className="heading">Category</h5>
              </div>
              <Grid container spacing={2} className="category-section">
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    defaultValue="Name"
                    size="small"
                    error={errors?.mainCategory}
                    {...register("mainCategory", {
                      required: "This is required.",
                    })}
                  />
                  <div className="error">{errors?.mainCategory?.message}</div>
                </Grid>

                <Grid item xs={12} className="">
                  {getValues("categoryImageFile") ? (
                    <>
                      <div className="image-remove-section">
                        <div className="col-md-10">
                          <span>{getValues("categoryImageFile[0].name")}</span>
                        </div>
                        <div className="col-md-2 delete-section">
                          <Button
                            className="delete-btn"
                            onClick={() => reset({ categoryImageFile: null })}
                          >
                            <DeleteIcon className="remove-icon" />
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      className="file-btn"
                      fullWidth
                      component="label"
                    >
                      Upload Image
                      <input
                        {...register("categoryImageFile", {
                          required: "This is required.",
                        })}
                        type="file"
                        hidden
                      />
                    </Button>
                  )}
                  <div className="error">
                    {errors?.categoryImageFile?.message}
                  </div>
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
                    <h5>Subcategory</h5>
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
                      <Grid
                        key={list.id}
                        container
                        spacing={2}
                        className="subcategory-add-section"
                        sx={{
                          padding: "1em 0 ",
                        }}
                      >
                        <Grid item spacing={2} xs={11}>
                          <Grid item xs={12}>
                            <TextField
                              label="Name"
                              variant="outlined"
                              fullWidth
                              size="small"
                              error={
                                errors.subcategory?.[index]?.subCategoryName
                              }
                              {...register(
                                `subcategory.${index}.subCategoryName`,
                                { required: true }
                              )}
                            />
                            {errors.subcategory?.[index]?.subCategoryName && (
                              <div className="error">This is required</div>
                            )}
                          </Grid>
                          <Grid item xs={12} className="image-remove-section">
                            {list?.imageFile?.length ? (
                              <>
                                <div className="col-md-10 name-section">
                                  <span>{list?.imageFile[0]?.name}</span>
                                </div>
                                <div className="col-md-2 delete-section">
                                  <Button
                                    className="delete-btn"
                                    onClick={() => remove(index)}
                                  >
                                    <DeleteIcon className="remove-icon" />
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <Button
                                variant="contained"
                                fullWidth
                                component="label"
                                className="mt-3 file-btn"
                              >
                                Upload Image
                                <TextField
                                  label="file"
                                  type="file"
                                  variant="outlined"
                                  error={errors.subcategory?.[index]?.imageFile}
                                  fullWidth
                                  hidden
                                  {...register(
                                    `subcategory.${index}.imageFile`,
                                    { required: true }
                                  )}
                                />
                              </Button>
                            )}
                          </Grid>
                          {errors.subcategory?.[index]?.imageFile && (
                            <div className="error">This is required</div>
                          )}
                        </Grid>
                        <Grid item xs={1} className="remove-section">
                          {fields.length > 1 && (
                            <button
                              onClick={() => remove(index)}
                              className="close-section"
                            >
                              <HighlightOffIcon />
                            </button>
                          )}
                        </Grid>
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
                    className="submit-btn"
                  >
                    submit
                  </Button>
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>
      {/* <PopupAlert show={true} message="Testing" /> */}
    </div>
  );
};

export default AddCategory;
