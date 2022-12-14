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

import RouterList from "../../../routes/routerList";
import { URLS } from "../../../config/urls.config";
import { popupVar } from "../../../utils/globalVar";

import { Box, Grid, Button, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PopupAlert from "../../../components/popupAlerts";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ProductImage from "../../../assets/product-2.jpg";

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

  const { id } = useParams();
  const [categoryDetailData, setCategoryDetail] = useState([]);
  const [popup, setPopup] = useState({ status: false, message: "", type: "" });
  const [imgSrc, setImgSrc] = useState([]);
  useEffect(() => {
    getCategoryDetailsApi();
  }, []);

  useEffect(() => {
    if (popup.status) {
      setTimeout(() => {
        setPopup({ status: false, message: "", type: "" });
      }, 3000);
    }
  }, [popup.status]);

  const getCategoryDetailsApi = () => {
    axios
      .get(`${URLS.category}/${id}`)
      .then(({ data }) => {
        setCategoryDetail(data);
        const subCatArr = data.subCategory.map((data) => {
          return {
            subCategoryName: data.label,
            imageFile: [{ name: data.subCategoryImage }],
          };
        });
        setValue("mainCategory", data.label);
        setValue("categoryImageFile", data.image);
        setValue("subcategory", subCatArr);
      })
      .catch((err) => {
        console.error("err in get Category List", err);
        setCategoryDetail([]);
      });
  };

  const getFileObj = async (file) => {
    let result = await fetch(file)
      .then((r) => r.blob())
      .then((blobFile) => {
        let imageName = file.split("/").pop();
        let fileExt = imageName.split(".").pop();
        return new File([blobFile], `${imageName}`, {
          type: `image/${fileExt}`,
        });
      });
    return result;
  };

  const updateCategorySubmitApi = async ({
    mainCategory,
    categoryImageFile,
    subcategory,
  }) => {
    const formData = new FormData();
    formData.append("label", mainCategory);
    formData.append("image", categoryImageFile[0]);

    for (const values of subcategory) {
      values.imageFile[0].fieldname = values.subCategoryName;
      if (
        values.imageFile[0].name.startsWith("http") ||
        values.imageFile[0].name.startsWith("https")
      ) {
        let file = await getFileObj(values.imageFile[0].name);
        formData.append(`${values.subCategoryName}`, file);
      } else {
        formData.append(`${values.subCategoryName}`, values.imageFile[0]);
      }
    }

    axios
      .put(`${URLS.category}/${id}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setPopup({
          status: true,
          message: res.message,
          type: res.success ? "success" : "error",
        });
        if (res.success) {
          navigate(
            `${RouterList.admin.admin}/${RouterList.admin.categoryList}`
          );
        }
      })
      .catch((err) => {
        console.error("Error in Category Add", err);
      });
  };

  const getfileName = (name) => {
    if (name[0]?.name) return name[0].name;
    if (!name) return name;
    let fileName = name?.split("/");
    return fileName[fileName.length - 1];
  };

  return (
    <div className="add-category">
      <Box className="wrapper">
        <Grid container direction="row" className="add-category-container">
          <div className="category-form-section col-md-8 col-lg-9 col-sm-10">
            <form
              onSubmit={handleSubmit((res) => updateCategorySubmitApi(res))}
              autoComplete="off"
            >
              <div className="category-wrapper">
                <div className="main-heading">
                  <h5 className="heading">Category</h5>
                </div>
                <Grid container spacing={2} className="category-section">
                  <Grid item xs={12}>
                    <TextField
                      label="Category"
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={errors?.mainCategory}
                      {...register("mainCategory", {
                        required: "This is required.",
                      })}
                      InputLabelProps={{ shrink: true }}
                    />

                    <div className="error">{errors?.mainCategory?.message}</div>
                  </Grid>

                  <Grid item xs={12} className="">
                    {getValues("categoryImageFile") ? (
                      <>
                        <div className="image-remove-section">
                          <div className="col-md-10">
                            <span>
                              {getValues("categoryImageFile[0]") && (
                                <img
                                  src={getValues("categoryImageFile[0]")}
                                  alt="categoryImage"
                                />
                              )}
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
                            required: "This is required",
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
              </div>
              <div className="subcategory-wrapper mt-3">
                <div className="sub-heading">
                  <h5 className="heading">Subcategory</h5>
                  <AddIcon
                    color="primary"
                    className="add-icon-section"
                    onClick={() =>
                      append({
                        subCategoryName: "",
                        imageFile: "",
                      })
                    }
                  />
                </div>
                <Grid
                  container
                  spacing={2}
                  marginTop={4}
                  className="subcategory-section"
                >
                  <Grid container spacing={2} paddingLeft={2}>
                    {/* sub category list */}
                    {controlledFields?.map((list, index) => {
                      return (
                        <Grid
                          key={list.id}
                          item
                          xs={12}
                          className="subcategory-add-section"
                          sx={{ padding: "1em" }}
                        >
                          <Grid item xs={fields.length > 1 ? 11 : 11.8}>
                            <Grid item xs={12}>
                              <TextField
                                label="Subcategory"
                                defaultValue="Subcategory"
                                variant="outlined"
                                fullWidth
                                size="small"
                                error={errors?.subCategoryName}
                                {...register(
                                  `subcategory.${index}.subCategoryName`
                                )}
                              />
                            </Grid>
                            <Grid item xs={12} className="image-remove-section">
                              {list?.imageFile?.length ? (
                                <>
                                  <div className="col-md-10">
                                    <span>
                                      {list?.imageFile[0] && (
                                        <img
                                          src={list?.imageFile[0]}
                                          alt="subcategoryImage"
                                        />
                                      )}
                                      {getfileName(list?.imageFile[0]?.name)}
                                    </span>
                                  </div>
                                  <div className="col-md-2 delete-section">
                                    <Button
                                      className="delete-btn"
                                      onClick={() =>
                                        setValue(
                                          `subcategory.${index}.imageFile`,
                                          null
                                        )
                                      }
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
                            </Grid>
                          </Grid>
                          {fields.length > 1 && (
                            <Grid item xs={1} className="remove-section">
                              <button
                                onClick={() => remove(index)}
                                className="close-section"
                              >
                                <HighlightOffIcon />
                              </button>
                            </Grid>
                          )}
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </div>
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
        <PopupAlert
          show={popup.status}
          message={popup.message}
          type={popup.type}
        />
      )}
    </div>
  );
}
export default Categorydetails;
