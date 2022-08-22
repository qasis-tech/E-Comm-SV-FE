import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
  useFieldArray,
  Controller,
  useWatch,
  set,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useReactiveVar } from "@apollo/client";
import { useParams } from "react-router-dom";

import RouterList from "../../../../routes/routerList";
import { URLS } from "../../../../config/urls.config";
import { popupVar } from "../../../../utils/globalVar";

import { Box, Grid, Button, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PopupAlert from "../../../../components/popupAlerts";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./addCategoryPage.styles.scss";

function Categorydetails() {
  const navigate = useNavigate();
  const popups = useReactiveVar(popupVar);

  const {
    register,
    resetField,
    handleSubmit,
    getValues,
    setValue,
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

  const { id } = useParams();
  const [categoryDetailData, setCategoryDetail] = React.useState([]);
  const [popup, setPopup] = useState({ status: false, message: "" });

  useEffect(() => {
    getCategoryDetailsApi();
  }, []);

  useEffect(() => {
    if (popup.status) {
      setTimeout(() => {
        setPopup({ status: false, message: "" });
      }, 3600);
    }
    // return () => {
    //   setPopup({ status: false, message: "" });
    // };
  }, [popup.status]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";

  const getCategoryDetailsApi = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.category}/${id}`, {
        headers: { Authorization: ` ${token}` },
      })
      .then((res) => {
        console.log("category get api==>>>", res);
        setCategoryDetail(res.data.data);
        const subCatArr = res.data.data.subCategory.map((data) => {
          return {
            subCategoryName: data.label,
            imageFile: [{ name: data.subCategoryImage }],
          };
        });
        setValue("categoryImageFile", res.data.data.image);
        setValue("subcategory", subCatArr);
      })
      .catch((err) => {
        console.error("err in get Category List", err);
      });
  };

  const handleCategorySubmitApi = (data) => {
    const { categoryImageFile, mainCategory, subcategory } = data;
    const formData = new FormData();

    formData.append("label", mainCategory);
    formData.append("image", categoryImageFile[0]);

    for (const values of subcategory) {
      formData.append(`${values.subCategoryName}`, values.imageFile[0]);
    }
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
    setPopup({ status: true, message: "Updated successfully" });

    // popupVar({
    //   message: "Testing 001",
    //   show: true,
    // });

    // axios
    //   .put(
    //     `${process.env.REACT_APP_BASE_URL}${URLS.category}/${id}`,
    //     formData,
    //     {
    //       headers: {
    //         Authorization: `${token}`,
    //         "content-type": "multipart/form-data",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("putapi category==>>", res);
    //     if (res.data.data) {
    //       navigate(
    //         `${RouterList.admin.admin}/${RouterList.admin.categoryList}`
    //       );
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Error in Category Add", err);
    //   });
  };

  const getfileName = (name) => {
    let fileName = name.split("/");
    return fileName[fileName.length - 1];
  };

  return (
    <div className="add-category">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <div className="category-form-section col-md-8 col-lg-9 col-sm-10">
            <form
              onSubmit={handleSubmit((res) => handleCategorySubmitApi(res))}
            >
              <div className="main-heading">
                <h5 className="heading">Category</h5>
              </div>
              <Grid container spacing={2} className="category-section">
                <Grid item xs={12}>
                  <TextField
                    id="outlined-helperText"
                    fullWidth
                    size="small"
                    label="Name"
                    values={getValues("mainCategory")}
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
                          <span>
                            {getfileName(getValues("categoryImageFile"))}
                          </span>
                        </div>
                        <div className="col-md-2 delete-section">
                          <Button
                            className="delete-btn"
                            onClick={() => resetField("categoryImageFile")}
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
                        item
                        xs={12}
                        className="subcategory-add-section"
                        sx={{
                          padding: "1em 0 ",
                        }}
                      >
                        <Grid item xs={11}>
                          <Grid item xs={12}>
                            <TextField
                              label="Subcategory"
                              variant="outlined"
                              fullWidth
                              size="small"
                              error={errors?.subCategoryName}
                              {...register(
                                `subcategory.${index}.subCategoryName`
                              )}
                            />
                            <div className="error">
                              {errors?.subCategoryName?.message}
                            </div>
                          </Grid>
                          <Grid item xs={12} className="image-remove-section">
                            {list?.imageFile?.length ? (
                              <>
                                <div className="col-md-10">
                                  <span>
                                    {getfileName(list?.imageFile[0]?.name)}
                                  </span>
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
                                  fullWidth
                                  hidden
                                  {...register(
                                    `subcategory.${index}.imageFile`
                                  )}
                                />
                              </Button>
                            )}
                            <div className="error">
                              {errors?.imageFile?.message}
                            </div>
                          </Grid>
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
              {popup.status.toString()}
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
                    className="submit-btn"
                  >
                    Update
                  </Button>
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>

      {popup.status && (
        <PopupAlert show={popup.status} message={popup.message} />
      )}
    </div>
  );
}

export default Categorydetails;
