import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../config/urls.config";
import RouterList from "../../../routes/routerList";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import ProductImage from "../../../assets/product-4.jpg";

import "./product-details.styles.scss";

const ProductDetails = () => {
  const navigate = useNavigate();

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
      productDetailVideoFile: [{ videos: "" }],
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

  const { fields: productVideoFields } = useFieldArray({
    control,
    name: "productDetailVideoFile",
  });

  const watchFeatureArray = watch("productFeatures");
  const watchProductImageArray = watch("productDetailImageFile");
  const watchProductVideoArray = watch("productDetailVideoFile");

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

  const controlledProductVideoFields = productVideoFields?.map(
    (field, index) => {
      return {
        ...field,
        ...watchProductVideoArray[index],
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
        console.log("data111===>>", data);
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
        if (data.productVideo) {
          const proVidArr = data.productVideo.map((data) => {
            return {
              videos: [{ name: data.video }],
            };
          });

          setValue("productDetailVideoFile", proVidArr);
        } else {
          setValue("productDetailVideoFile", data.productVideo);
        }
      })
      .catch((err) => {
        console.log("err in product details get api", err);
      });
  };

  const getFileObj = async (file) => {
    console.log("file", file);
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

  // put api**************//////
  const updateProductDetailApi = async ({
    productName,
    productQuantity,
    productUnit,
    productCategory,
    productSubcategory,
    productDescription,
    productFeatures,
    productPrice,
    productOfferUnit,
    productOfferQuantity,
    productOfferPrice,
    productDetailImageFile,
    productDetailVideoFile,
  }) => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("category", productCategory);
    formData.append("subCategory", productSubcategory);
    formData.append("unit", productUnit);
    formData.append("quantity", productQuantity);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("offerUnit", productOfferUnit);
    formData.append("offerQuantity", productOfferQuantity);
    formData.append("offerPrice", productOfferPrice);

    const temp = {};
    const featureArray = [];
    for (const values of productFeatures) {
      let key = values.productFeatureKey;
      temp[key] = values.productFeatureValue;
    }
    featureArray.push(temp);
    formData.append("features", JSON.stringify(featureArray));

    for (const values of productDetailImageFile) {
      if (
        values.images[0].name.startsWith("http") ||
        values.images[0].name.startsWith("https")
      ) {
        let file = await getFileObj(values.images[0].name);
        formData.append("productImage", file);
      } else {
        formData.append("productImage", values.images[0]);
      }
    }

    for (const values of productDetailVideoFile) {
      if (
        values.videos[0].name.startsWith("http") ||
        values.videos[0].name.startsWith("https")
      ) {
        let file = await getFileObj(values.videos[0].name);
        formData.append("productVideo", file);
      } else {
        formData.append("productVideo", values.videos[0]);
      }
    }
    axios
      .put(`${URLS.product}/${id}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("resputtt==>", res);
        if (res.success) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.productList}`);
        }
      })
      .catch((err) => {
        console.error("Error in Category Add", err);
      });
  };

  const getfileName = (name) => {
    if (name[0]?.name) return name[0]?.name;
    if (!name) return name;
    let fileName = name?.split("/");
    return fileName[fileName.length - 1];
  };

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
            <form onSubmit={handleSubmit(updateProductDetailApi)}>
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
                      {...register("productName", {
                        required: "ProductName is required",
                      })}
                      error={errors?.productName}
                      InputLabelProps={{ shrink: true }}
                    />
                    <div className="error">{errors?.productName?.message}</div>
                  </Grid>

                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Quantity"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productQuantity}
                      {...register("productQuantity", {
                        required: "Quantity is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a number",
                        },
                      })}
                    />
                    <div className="error">
                      {errors?.productQuantity?.message}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Unit"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productUnit}
                      {...register("productUnit", {
                        required: "Unit is required",
                      })}
                    />
                    <div className="error">{errors?.productUnit?.message}</div>
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Category"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productCategory}
                      {...register("productCategory", {
                        required: "Category is required",
                      })}
                    />
                    <div className="error">
                      {errors?.productCategory?.message}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Subcategory"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productSubcategory}
                      {...register("productSubcategory", {
                        required: "SubCategory is required",
                      })}
                    />
                    <div className="error">
                      {errors?.productSubcategory?.message}
                    </div>
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
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productDescription}
                      {...register("productDescription", {
                        required: "Description is required",
                      })}
                    />
                    <div className="error">
                      {errors?.productDescription?.message}
                    </div>
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
                            error={
                              errors.productFeatures?.[index]?.productFeatureKey
                            }
                            {...register(
                              `productFeatures.${index}.productFeatureKey`,
                              { required: true }
                            )}
                          />
                          {errors.productFeatures?.[index]
                            ?.productFeatureKey && (
                            <div className="error">FeatureKey is required</div>
                          )}
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="value"
                            size="small"
                            error={
                              errors.productFeatures?.[index]
                                ?.productFeatureValue
                            }
                            {...register(
                              `productFeatures.${index}.productFeatureValue`,
                              { required: true }
                            )}
                          />
                          {errors.productFeatures?.[index]
                            ?.productFeatureValue && (
                            <div className="error">FeatureKey is required</div>
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
                      id="outlined-helperText"
                      label="Price"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productPrice}
                      {...register("productPrice", {
                        required: "Price is required",
                      })}
                    />
                    <div className="error">{errors?.productPrice?.message}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Unit"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productOfferUnit}
                      {...register("productOfferUnit", {
                        required: "OfferUnit is required",
                      })}
                    />
                    <div className="error">
                      {errors?.productOfferUnit?.message}
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Quantity"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productOfferQuantity}
                      {...register("productOfferQuantity", {
                        required: "OfferQuantity is required",
                      })}
                    />
                    <div className="error">
                      {errors?.productOfferQuantity?.message}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Price"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors?.productOfferPrice}
                      {...register("productOfferPrice", {
                        required: "OfferPrice is required",
                      })}
                    />
                    <div className="error">
                      {errors?.productOfferPrice?.message}
                    </div>
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
                          {list?.images[0] && (
                            <img src={list?.images[0]} alt="ProductImage" />
                          )}
                          <Typography>
                            {" "}
                            {list?.images[0]?.name &&
                              getfileName(list?.images[0]?.name)}
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
                                `productDetailImageFile.${index}.images`
                              )}
                              type="file"
                              hidden
                            />
                          </Button>
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
                  {controlledProductVideoFields?.map((lists, index) => {
                    return (
                      <Grid key={lists.id} item xs={6}>
                        {lists?.videos ? (
                          <>
                            <Button
                              variant="contained"
                              className="file-btn"
                              fullWidth
                              component="label"
                              defaultValue="video"
                            >
                              Upload Video
                              <input
                                {...register(
                                  `productDetailVideoFile.${index}.videos`
                                )}
                                type="file"
                                hidden
                              />
                            </Button>
                            {lists?.videos[0] && (
                              <img src={lists?.videos[0]} alt="ProductVideo" />
                            )}
                            <Typography>
                              {" "}
                              {lists?.videos[0]?.name &&
                                getfileName(lists?.videos[0]?.name)}
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="contained"
                              className="file-btn"
                              fullWidth
                              component="label"
                            >
                              Upload Video
                              <input
                                {...register(
                                  `productDetailVideoFile.${index}.videos`
                                )}
                                type="file"
                                hidden
                              />
                            </Button>
                            <Typography>
                              {" "}
                              {lists?.videos[0]?.name &&
                                getfileName(lists?.videos[0]?.name)}
                            </Typography>
                          </>
                        )}
                      </Grid>
                    );
                  })}
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
