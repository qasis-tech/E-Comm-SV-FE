import * as React from "react";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams } from "react-router-dom";
import { URLS } from "../../../../config/urls.config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import ProductImage from "../../../../assets/product-4.jpg";

import "./product-details.styles.scss";

const ProductDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      productFeatures: [{ productFeatureKey: "", productFeatureValue: "" }],
      productDetailImageFile: [{ images: "" }],
      productVideoFile: null,
    },
  });

  const {
    fields: featureFields,
    append: featureAppend,
    remove: featureRemove,
  } = useFieldArray({
    control,
    name: "productFeatures",
  });
  const {
    fields: productImageFields,
    append: productFieldAppend,
    remove: productFieldRemove,
  } = useFieldArray({
    control,
    name: "productDetailImageFile",
  });
  const watchFeatureArray = watch("productFeatures");
  const watchProductImageArray = watch("productDetailImageFile");
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

  const { id } = useParams();
  const [productDetailData, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetailsApi();
  }, []);

  const getProductDetailsApi = () => {
    axios
      .get(`${URLS.product}/${id}`)
      .then(({ data }) => {
        console.log("ress==>", data);
        setProductDetail(data);
        setValue("productName", data.name);
        setValue("productCategory", data.category);
        setValue("productSubcategory", data.subCategory);
        setValue("productUnit", data.unit);
        setValue("productQuantity", data.quantity);
        setValue("productDescription", data.description);
        setValue("productPrice", data.price);
        setValue("productOfferUnit", data.offerUnit);
        setValue("productOfferQuantity", data.offerQuantity);
        setValue("productOfferPrice", data.offerPrice);

        const temp = [];
        temp.push(data.features);
        const tempArray = [];
        JSON.parse(temp).map((item) => {
          Object.keys(item).forEach((val) => {
            tempArray.push({
              productFeatureKey: val,
              productFeatureValue: item[val],
            });
          });
        });
        setValue("productFeatures", tempArray);
        const proImgArr = data.productImage.map((data) => {
          return {
            images: [{ name: data.image }],
          };
        });

        setValue("productDetailImageFile", proImgArr);
        const proVidArr = data.productVideo.map((data) => {
          console.log("video", data);
          setValue("productVideoFile", data.video);
        });
      })
      .catch((err) => {
        console.log("err in Category LIst", err);
      });
  };
  console.log("1111", getValues("productVideoFile"));
  const putProductDetailApi = () => {};

  return (
    <div className="details-product">
      <Box noValidate autoComplete="off" className="product-details-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="details-product-container"
        >
          <div className="product-details-form-section col-md-8">
            <form onSubmit={handleSubmit(putProductDetailApi)}>
              <div className="main-heading">
                <h5 className="heading">Product Details</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Name"
                      fullWidth
                      size="small"
                      defaultValue=""
                      {...register("productName")}
                      error={errors?.productName}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <p>{errors?.productName?.message}</p>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Quantity"
                      fullWidth
                      size="small"
                      defaultValue="10"
                      {...register("productQuantity")}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Unit"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
                      {...register("productUnit")}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Category"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
                      {...register("productCategory")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Subcategory"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
                      {...register("productSubcategory")}
                    />
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
                      defaultValue="Kiwifruit or Chinese gooseberry is the edible berry of several species of woody vines in the genus Actinidia."
                      {...register("productDescription")}
                    />
                  </Grid>
                </Grid>
                <div className="feature-add">
                  <Grid item className="add-icon">
                    <AddIcon
                      onClick={() =>
                        featureAppend({
                          productFeatureKey: "",
                          productFeatureValue: "",
                        })
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
                            {...register(
                              `productFeatures.${index}.productFeatureKey`
                            )}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="value"
                            size="small"
                            {...register(
                              `productFeatures.${index}.productFeatureValue`
                            )}
                          />
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
                      id="outlined-helperText"
                      label="Price"
                      fullWidth
                      size="small"
                      defaultValue="80"
                      {...register("productPrice")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Unit"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
                      {...register("productOfferUnit")}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Quantity"
                      fullWidth
                      size="small"
                      defaultValue="5"
                      {...register("productOfferQuantity")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Price"
                      fullWidth
                      size="small"
                      defaultValue="20"
                      {...register("productOfferPrice")}
                    />
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
                    console.log("list", list);
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
                              {...register(
                                `productDetailImageFile.${index}.images`,
                                {
                                  required: true,
                                }
                              )}
                              type="file"
                              hidden
                            />
                          </Button>
                          {errors.productDetailImageFile?.[index]?.images && (
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
                    <span>{getValues("productVideoFile")}</span>
                  </Grid>
                </Grid>
              </div>
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
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
    </div>
  );
};

export default ProductDetails;
