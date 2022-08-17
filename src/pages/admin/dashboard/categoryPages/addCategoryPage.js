import { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import RouterList from "../../../../routes/routerList";
import { URLS } from "../../../../config/urls.config";

import "./addCategoryPage.styles.scss";
import "./addCategoryPage.styles.scss";

import { Box, Grid, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
      categoryImageFile: null,
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
    const { categoryImageFile, mainCategory, subcategory } = params;
    const formData = new FormData();

    formData.append("label", mainCategory);
    formData.append("image", categoryImageFile[0]);

    for (const values of subcategory) {
      formData.append(`${values.subCategoryName}`, values.imageFile[0]);
    }

    setTimeout(() => {
      console.log("Payload", formData);
    }, 1000);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";

    axios
      .post(`${process.env.REACT_APP_BASE_URL}${URLS.category}`, formData, {
        headers: {
          Authorization: `${token}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Category Add ===> ", res);
        if (res.data.data) {
          navigate(
            `${RouterList.admin.admin}/${RouterList.admin.categoryList}`
          );
          // navigate to cat list page
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
          <div className="category-form-section col-md-8 col-lg-6 col-sm-10">
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
                  {getValues("categoryImageFile") ? (
                    <>
                      <span>{getValues("categoryImageFile[0].name")}</span>
                      <Button
                        variant="contained"
                        component="label"
                        className="mt-3"
                        onClick={() => reset({ categoryImageFile: null })}
                      >
                        remove
                      </Button>
                    </>
                  ) : (
                    <Button variant="contained" fullWidth component="label">
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
                  <ErrorMessage
                    errors={errors}
                    name="categoryImageFile"
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
                                Remove
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
