import * as React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";

import { URLS } from "../../../config/urls.config";
import RouterList from "../../../routes/routerList";
import Loader from "../../../components/Loader";

import { Autocomplete, Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./add-product.styles.scss";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      features: [{ featureKey: "", featureValue: "" }],
      productImageFile: [{ images: "" }],
      productVideoFile: null,
    },
  });
  const {
    fields: featureFields,
    append: featureAppend,
    remove: featureRemove,
  } = useFieldArray({
    control,
    name: "features",
  });
  const {
    fields: productImageFields,
    append: productFieldAppend,
    remove: productFieldRemove,
  } = useFieldArray({
    control,
    name: "productImageFile",
  });
  const watchFeatureArray = watch("features");
  const watchProductImageArray = watch("productImageFile");
  const controlledFeatureFields = featureFields?.map((field, index) => {
    return {
      ...field,
      ...watchFeatureArray[index],
    };
  });
  const controlledProductImageFields = productImageFields?.map(
    (field, index) => {
      return {
        ...field,
        ...watchProductImageArray[index],
      };
    }
  );
  const [categoryData, setCategorydata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [unitData, setUnitdata] = useState([
    { label: "Kg", value: "kg" },
    { label: "Gram", value: "g" },
    { label: "Ltr", value: "ltr" },
    { label: "No", value: "no" },
  ]);
  const [selectedUnit, setSelectedunit] = useState([]);
  const [selectedOfferunit, setSelectedofferunit] = useState([]);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    getCatgoryListApi();
  }, []);

  const getCatgoryListApi = () => {
    setLoader(true);
    axios
      .get(`${URLS.category}`)
      .then((res) => {
        setLoader(false);
        setCategorydata(res?.data);
      })
      .catch((err) => {
        setLoader(false);
        console.log("error", err);
      });
  };
  const handleCategory = (e, val) => setSelectedCategory(val);
  const handleSubCategory = (e, val) => setSelectedSubCategory(val);
  const handleUnit = (e, val) => setSelectedunit(val);
  const handleOfferUnit = (e, val) => setSelectedofferunit(val);

  const handleProductAdd = ({
    productName,
    quantity,
    category,
    subCategory,
    description,
    features,
    price,
    offerQuantity,
    offerPrice,
    productImageFile,
    productVideoFile,
  }) => {
    setLoader(true);
    const bodyFormData = new FormData();
    bodyFormData.append("name", productName);
    bodyFormData.append("quantity", quantity);
    bodyFormData.append("unit", selectedUnit.value);
    bodyFormData.append("category", category);
    bodyFormData.append("subCategory", subCategory);
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);
    bodyFormData.append("offerUnit", selectedOfferunit.value);
    bodyFormData.append("offerQuantity", offerQuantity);
    bodyFormData.append("offerPrice", offerPrice);

    const temp = {};
    const featureArray = [];
    for (const values of features) {
      let key = values.featureKey;
      temp[key] = values.featureValue;
    }
    featureArray.push(temp);
    bodyFormData.append("features", JSON.stringify(featureArray));

    if (productImageFile) {
      for (const values of productImageFile) {
        bodyFormData.append("productImage", values.images[0]);
      }
    } else {
    }
    if (productVideoFile) {
      bodyFormData.append("productVideo", productVideoFile[0]);
    }
    axios
      .post(`${URLS.product}`, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setLoader(false);
        console.log("Response=>>", response);
        if (response.success) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.productList}`);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("Errorss=>>", error);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="add-product">
      <Box noValidate autoComplete="off" className="product-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="add-product-container"
        >
          <div className="product-form-section col-md-8">
            <form onSubmit={handleSubmit(handleProductAdd)}>
              <div className="main-heading">
                <h5 className="heading">Product</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Name"
                      size="small"
                      error={errors?.productName}
                      {...register("productName", {
                        required: "Product Name is required",
                      })}
                    />
                    <div className="error">{errors?.productName?.message}</div>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Quantity"
                      size="small"
                      error={errors?.quantity}
                      {...register("quantity", {
                        required: "Quantity is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a number",
                        },
                      })}
                    />
                    <div className="error">{errors?.quantity?.message}</div>
                  </Grid>
                  <Grid item xs={4}>
                    {unitData?.length && (
                      <Autocomplete
                        options={unitData}
                        getOptionLabel={(option) => option.label || ""}
                        isOptionEqualToValue={(option, value) =>
                          option.label === value.label
                        }
                        onChange={(e, val) => handleUnit(e, val)}
                        value={selectedUnit}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Units"
                            size="small"
                            {...register("units", {
                              required: "Unit is required",
                            })}
                          />
                        )}
                      />
                    )}
                    {!selectedUnit.value ? (
                      <div className="error">{errors?.units?.message}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid container marginTop={1} spacing={2}>
                  <Grid item xs={6}>
                    {categoryData?.length && (
                      <Autocomplete
                        options={categoryData}
                        getOptionLabel={(option) => option.label || ""}
                        isOptionEqualToValue={(option, value) =>
                          option._id === value._id
                        }
                        onChange={(e, val) => handleCategory(e, val)}
                        value={selectedCategory}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Categories"
                            size="small"
                            {...register("category", {
                              required: "Category is required",
                            })}
                          />
                        )}
                      />
                    )}
                    {!selectedCategory.label ? (
                      <div className="error">{errors?.category?.message}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      options={
                        selectedCategory?.subCategory?.length
                          ? selectedCategory?.subCategory
                          : []
                      }
                      getOptionLabel={(option) => option.label || ""}
                      isOptionEqualToValue={(option, value) =>
                        option.label === value.label
                      }
                      onChange={(e, val) => handleSubCategory(e, val)}
                      value={selectedSubCategory}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Subcategories"
                          size="small"
                          {...register("subCategory", {
                            required: "SubCategory is required",
                          })}
                        />
                      )}
                    />
                    {!selectedSubCategory.label ? (
                      <div className="error">
                        {errors?.subCategory?.message}
                      </div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid container marginTop={1} spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      size="small"
                      error={errors?.description}
                      {...register("description", {
                        required: "Description is required",
                      })}
                    />
                    <div className="error">{errors?.description?.message}</div>
                  </Grid>
                </Grid>

                <div className="feature-add">
                  <Grid item className="add-icon">
                    <AddIcon
                      onClick={() =>
                        featureAppend({ featureKey: "", featureValue: "" })
                      }
                      color="primary"
                      className="add-icon-section"
                    />
                  </Grid>
                  {controlledFeatureFields?.map((list, index) => {
                    return (
                      <Grid
                        key={list.id}
                        className="add-section"
                        container
                        spacing={2}
                        marginTop={1}
                      >
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            id="outlined-multiline-static"
                            label="Features"
                            {...register(`features.${index}.featureKey`, {
                              required: true,
                            })}
                          />
                          {errors.features?.[index]?.featureKey && (
                            <div className="error">FeatureKey is required</div>
                          )}
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="value"
                            size="small"
                            // onChange={(e) => handleFeatureKey(null, e)}
                            {...register(`features.${index}.featureValue`, {
                              required: true,
                            })}
                          />
                          {errors.features?.[index]?.featureValue && (
                            <div className="error">
                              FeatureValue is required
                            </div>
                          )}
                        </Grid>
                        <Grid item xs={1} className="remove-section">
                          {controlledFeatureFields.length > 1 && (
                            <button
                              onClick={() => featureRemove(index)}
                              className="close-section"
                            >
                              <HighlightOffIcon />
                            </button>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                </div>

                <Grid container marginTop={1} spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Price"
                      size="small"
                      error={errors?.price}
                      {...register("price", {
                        required: "Price is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a number",
                        },
                      })}
                    />
                    <div className="error">{errors?.price?.message}</div>
                  </Grid>
                  <Grid item xs={6}>
                    {unitData?.length && (
                      <Autocomplete
                        options={unitData}
                        getOptionLabel={(option) => option.label || ""}
                        isOptionEqualToValue={(option, value) =>
                          option.label === value.label
                        }
                        onChange={(e, val) => handleOfferUnit(e, val)}
                        value={selectedOfferunit}
                        renderInput={(params) => (
                          <TextField
                            {...register("offerUnit", {
                              required: "OfferUnit is required",
                            })}
                            {...params}
                            label="Offer Units"
                            size="small"
                          />
                        )}
                      />
                    )}
                    {!selectedOfferunit.value ? (
                      <div className="error">{errors?.offerUnit?.message}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Quantity"
                      size="small"
                      error={errors?.offerQuantity}
                      {...register("offerQuantity", {
                        required: "OfferQuantity is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a number",
                        },
                      })}
                    />
                    <div className="error">
                      {errors?.offerQuantity?.message}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Offer Price"
                      size="small"
                      error={errors?.offerPrice}
                      {...register("offerPrice", {
                        required: "OfferPrice is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a number",
                        },
                      })}
                    />
                    <div className="error">{errors?.offerPrice?.message}</div>
                  </Grid>
                </Grid>

                <div className="feature-add">
                  <Grid item className="add-icon">
                    <AddIcon
                      onClick={() => productFieldAppend({ images: "" })}
                      color="primary"
                      className="add-icon-section"
                    />
                  </Grid>

                  {controlledProductImageFields?.map((list, index) => {
                    return (
                      <Grid
                        key={list.id}
                        className="add-section"
                        container
                        spacing={2}
                        marginTop={1}
                      >
                        <Grid item xs={6}>
                          <Typography>
                            {" "}
                            {list && list?.images[0]?.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Button
                            variant="contained"
                            className="file-btn"
                            fullWidth
                            component="label"
                          >
                            Upload Image
                            <input
                              {...register(`productImageFile.${index}.images`, {
                                required: true,
                              })}
                              type="file"
                              hidden
                            />
                          </Button>
                          {errors.productImageFile?.[index]?.images && (
                            <div className="error">Image is required</div>
                          )}
                        </Grid>
                        <Grid item xs={1} className="remove-section">
                          {controlledProductImageFields.length > 1 && (
                            <button
                              onClick={() => productFieldRemove(index)}
                              className="close-section"
                            >
                              <HighlightOffIcon />
                            </button>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                </div>
                <Grid container spacing={2} marginTop={1}>
                  <span>{getValues("productVideoFile[0].name")}</span>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      className="file-btn"
                      fullWidth
                      component="label"
                    >
                      Upload Video
                      <input
                        {...register("productVideoFile")}
                        type="file"
                        hidden
                      />
                    </Button>

                    <ErrorMessage
                      errors={errors}
                      name="productVideoFile"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button onClick={() => navigate(-1)}>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="submit-btn"
                    >
                      submit
                    </Button>
                  )}
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default AddProduct;
