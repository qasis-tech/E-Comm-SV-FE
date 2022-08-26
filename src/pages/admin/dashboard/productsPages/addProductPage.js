import * as React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { URLS } from "../../../../config/urls.config";
import { ErrorMessage } from "@hookform/error-message";

import {
  Autocomplete,
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./add-product.styles.scss";

const productaddSchema = yup
  .object()
  .shape({
    // productName: yup.string().required("Product is required"),
    // units: yup.string(),
    // category: yup.string(),
    // subCategory: yup.string(),
    // quantity: yup
    //   .number()
    //   .required("Quantity is required")
    //   .typeError("You must specify number")
    //   .min(0, "Min value 0"),
    // description: yup.string().required("Description is required"),
    // featureKey: yup.string(),
    // featureValue: yup.string(),
    // price: yup.number().typeError("You must specify number").required(),
    // offerUnit: yup.string(),
    // offerQuantity: yup
    //   .number()
    //   .required()
    //   .typeError("You must specify number")
    //   .min(0, "Min value 0"),
    // offerPrice: yup
    //   .number()
    //   .required("OfferPrice is required")
    //   .typeError("You must specify number")
    //   .min(0, "Min value 0"),
    // image: yup.array().required(),
    // productVideoFile: yup.array(),
  })
  .required();

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productaddSchema),
    defaultValues: {
      features: [{ featureKey: "", featureValue: "" }],
      productImageFile: [{ images: "" }],
    },
  });
  const { fields: featureFields, append: featureAppend } = useFieldArray({
    control,
    name: "features",
  });
  const { fields: productImageFields, append: productFieldAppend } =
    useFieldArray({
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
    { label: "kg", value: "kg" },
    { label: "g", value: "g" },
    { label: "ltr", value: "ltr" },
    { label: "no:", value: "no" },
  ]);
  const [selectedUnit, setSelectedunit] = useState([]);
  const [selectedOfferunit, setSelectedofferunit] = useState([]);

  // console.log("001", watch("productImageFile"));

  React.useEffect(() => {
    getCatgoryListApi();
  }, []);
  const getCatgoryListApi = () => {
    axios
      .get(`${URLS.category}`)
      .then((res) => {
        setCategorydata(res.data);
        // console.log("resss", res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleCategory = (e, val) => setSelectedCategory(val);
  const handleSubCategory = (e, val) => setSelectedSubCategory(val);

  const handleUnit = (e, val) => {
    console.log("val", val);
    setSelectedunit(val);
    console.log("selectedunit", val);
  };
  const handleOfferUnit = (e, val) => setSelectedofferunit(val);

  // const handleFeatureKey = (key, val) => {
  //   console.log("key", key);
  //   let temp = [...featureData];
  //   let obj = {};
  //   obj[key.target.value] = val?.target?.value;
  //   temp.push(obj);
  //   SetFeaturedata(temp);
  // };

  const handleProductAdd = (data) => {
    const {
      productName,
      quantity,
      units,
      category,
      subCategory,
      description,
      features,
      price,
      offerUnit,
      offerQuantity,
      offerPrice,
      productImageFile,
      productVideoFile,
    } = data;

    const bodyFormData = new FormData();
    bodyFormData.append("name", productName);
    bodyFormData.append("quantity", quantity);
    bodyFormData.append("unit", units);
    bodyFormData.append("category", category);
    bodyFormData.append("subCategory", subCategory);
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);
    bodyFormData.append("offerUnit", offerUnit);
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

    // let promise = new Promise((resolve, reject) => {
    //   let arr = [];
    //   for (const values of productImageFile) {
    //     arr.push({ image: values.image[0] });
    //   }
    //   if (arr.length !== 0) {
    //     console.log("arrayy==>>", arr);
    //     resolve(bodyFormData.append("productImage", JSON.stringify(arr)));
    //   }

    //   reject("fails");
    // });
    // promise.then(() => console.log("ygysady")).catch((err) => console.log(err));

    // let arr = [];
    for (let i = 0; i < productImageFile.length; i++) {
      console.log("values of i", productImageFile[i].images);
      // arr.push({ image: values.image[0] });
      bodyFormData.append("productImage", productImageFile[i]);
    }
    bodyFormData.append("productVideo", productVideoFile[0]);

    // console.log("111===>>>", arr);
    // bodyFormData.append("productImage", arr);
    // console.log("cxhcvhcvs=====>>>", bodyFormData.entries());
    // console.log("imagearray===>>", arr);

    // let imageArr = JSON.stringify(arr);
    // console.log("imagearray===>>", imageArr);

    // bodyFormData.append("productImage", JSON.stringify(arr));
    axios
      .post(`${URLS.product}`, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Response=>>", response);
      })
      .catch((error) => {
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
                      {...register("productName")}
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
                      {...register("quantity")}
                    />
                    <div className="error">{errors?.quantity?.message}</div>
                  </Grid>
                  <Grid item xs={4}>
                    {unitData?.length && (
                      <Autocomplete
                        options={unitData}
                        getOptionLabel={(option) => option.label || ""}
                        isOptionEqualToValue={(option, value) =>
                          option.value === value.value
                        }
                        onChange={(e, val) => handleUnit(e, val)}
                        value={selectedUnit}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Units"
                            size="small"
                            {...register("units")}
                          />
                        )}
                      />
                    )}
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
                            {...register("category")}
                          />
                        )}
                      />
                    )}
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
                          {...register("subCategory")}
                        />
                      )}
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
                      error={errors?.description}
                      {...register("description")}
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
                            // onChange={(e) => handleFeatureKey(e, null)}
                            {...register(`features.${index}.featureKey`)}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="value"
                            size="small"
                            // onChange={(e) => handleFeatureKey(null, e)}
                            {...register(`features.${index}.featureValue`)}
                          />
                        </Grid>
                        <Grid item xs={1} className="remove-section">
                          {featureFields.length > 1 && (
                            <button className="close-section">
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
                      {...register("price")}
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
                            {...register("offerUnit")}
                            {...params}
                            label="Offer Units"
                            size="small"
                          />
                        )}
                      />
                    )}
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
                      {...register("offerQuantity")}
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
                      {...register("offerPrice")}
                    />
                    <div className="error">{errors?.offerPrice?.message}</div>
                  </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                  <button onClick={() => productFieldAppend({ images: "" })}>
                    Add
                  </button>
                  {controlledProductImageFields?.map((list, index) => {
                    return (
                      <Grid key={list.id} item xs={6}>
                        {list && list?.images[0]?.name}
                        <Button
                          variant="contained"
                          className="file-btn"
                          fullWidth
                          component="label"
                        >
                          Upload Image
                          <input
                            {...register(`productImageFile.${index}.images`)}
                            type="file"
                            hidden
                          />
                        </Button>
                        {/* <div className="error">
                          {errors?.productImageFile?.message}
                        </div> */}

                        {/* <ErrorMessage
                      errors={errors}
                      name="productImageFile"
                      render={({ message }) => <p>{message}</p>}
                    /> */}
                      </Grid>
                    );
                  })}

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

export default AddProduct;
