import * as React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { URLS } from "../../../../config/urls.config";
import { ErrorMessage } from "@hookform/error-message";

import "./add-product.styles.scss";

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

const productaddSchema = yup
  .object()
  .shape({
    productName: yup.string().required("Product is required"),
    quantity: yup
      .number()
      .required("Quantity is required")
      .typeError("You must specify number")
      .min(0, "Min value 0"),
    description: yup.string().required("Description is required"),
    featureKey: yup.string(),
    featureValue: yup.string(),
    price: yup.number().typeError("You must specify number").required(),
    offerQuantity: yup
      .number()
      .required()
      .typeError("You must specify number")
      .min(0, "Min value 0"),
    offerPrice: yup
      .number()
      .required("OfferPrice is required")
      .typeError("You must specify number")
      .min(0, "Min value 0"),
    productImageFile: yup.string().required(),
    productVideoFile: yup.string().required(),
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
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: "features",
  });
  const watchFieldArray = watch("features");
  const controlledFields = fields?.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const [categoryData, setCategorydata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [unitData, setUnitdata] = useState([
    { label: "Kg" },
    { label: "Ltr" },
    { label: "no:" },
  ]);
  const [selectedUnit, setSelectedunit] = useState([]);
  const [selectedOfferunit, setSelectedofferunit] = useState([]);
  const [featureData, SetFeaturedata] = useState([{}]);

  React.useEffect(() => {
    getCatgoryListApi();
  }, []);
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
  const getCatgoryListApi = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.category}`, {
        headers: { Authorization: `${access_token}` },
      })
      .then((res) => {
        setCategorydata(res.data.data);
        console.log("resss", res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleCategory = (e, val) => setSelectedCategory(val);
  const handleSubCategory = (e, val) => setSelectedSubCategory(val);

  const handleUnit = (e, val) => setSelectedunit(val);
  const handleOfferUnit = (e, val) => setSelectedofferunit(val);

  const handleFeatureKey = (key, val) => {
    console.log("key", key);
    let temp = [...featureData];
    let obj = {};
    obj[key.target.value] = val?.target?.value;
    temp.push(obj);
    SetFeaturedata(temp);
  };

  const handleProductAdd = (data) => {
    const {
      productName,
      quantity,
      selectedUnit,
      selectedCategory,
      selectedSubCategory,
      description,
      features,
      price,
      selectedOfferunit,
      offerQuantity,
      offerPrice,
      productImageFile,
      productVideoFile,
    } = data;
    var bodyFormData = new FormData();
    bodyFormData.append("name", productName);
    bodyFormData.append("category", selectedCategory);
    bodyFormData.append("subCategory", selectedSubCategory);
    bodyFormData.append("unit", selectedUnit);
    bodyFormData.append("quantity", quantity);
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);
    bodyFormData.append("offerUnit", selectedOfferunit);
    bodyFormData.append("offerQuantity", offerQuantity);
    bodyFormData.append("offerPrice", offerPrice);

    console.log("productimage", productImageFile);
    for (let i = 0; i < productImageFile.length; i++) {
      // bodyFormData.append("productImage", productImageFile[i]);
      console.log("productfile", productImageFile[i]);
    }

    // bodyFormData.append("productVideo", productVideoFile);

    const temp = {};
    const featureArray = [];

    for (const values of features) {
      let key = values.featureKey;
      temp[key] = values.featureValue;
      // bodyFormData.append(`${values.featureKey}`, values.featureValue);
    }
    featureArray.push(temp);
    bodyFormData.append("features", featureArray);
    console.log("features=>>>", featureArray);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";

    axios
      .post(`${process.env.REACT_APP_BASE_URL}${URLS.product}`, bodyFormData, {
        headers: {
          Authorization: ` ${token}`,
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
            <form onSubmit={handleSubmit((res) => handleProductAdd(res))}>
              <div className="main-product-heading">
                <h5 className="product-heading">Product</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Name"
                      size="small"
                      {...register("productName")}
                    />
                    <p>{errors?.productName?.message}</p>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Quantity"
                      size="small"
                      {...register("quantity")}
                    />
                    <p>{errors?.quantity?.message}</p>
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
                          <TextField {...params} label="Units" size="small" />
                        )}
                      />
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
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
                      {...register("description")}
                    />
                    <p>{errors?.description?.message}</p>
                  </Grid>
                </Grid>
                {controlledFields?.map((list, index) => {
                  return (
                    <Grid key={list.id} container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          size="small"
                          id="outlined-multiline-static"
                          label="Features"
                          onChange={(e) => handleFeatureKey(e, null)}
                          {...register(`features.${index}.featureKey`)}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="value"
                          size="small"
                          onChange={(e) => handleFeatureKey(null, e)}
                          {...register(`features.${index}.featureValue`)}
                        />
                      </Grid>

                      <Grid item xs={1}>
                        <AddIcon
                          onClick={() =>
                            append({ featureKey: "", featureValue: "" })
                          }
                          color="primary"
                          className="add-icon-section"
                        />
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid container marginTop={1} spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Price"
                      size="small"
                      {...register("price")}
                    />
                    <p>{errors?.price?.message}</p>
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
                            {...params}
                            label="Offer Units"
                            size="small"
                          />
                        )}
                      />
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Quantity"
                      size="small"
                      {...register("offerQuantity")}
                    />
                    <p>{errors?.offerQuantity?.message}</p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Offer Price"
                      size="small"
                      {...register("offerPrice")}
                    />
                    <p>{errors?.offerPrice?.message}</p>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth component="label">
                      Upload Image
                      <input
                        {...register("productImageFile")}
                        type="file"
                        hidden
                      />
                    </Button>
                    <ErrorMessage
                      errors={errors}
                      name="productImageFile"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth component="label">
                      Upload Video
                      <input
                        {...register("productVideoFile", {
                          required: "This is required.",
                        })}
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

export default AddProduct;
