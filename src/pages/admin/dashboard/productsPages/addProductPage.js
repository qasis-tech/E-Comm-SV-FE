import {
  Autocomplete,
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
} from "@mui/material";
import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { BASE_URL, URLS } from "../../../../config/urls.config";

const productaddpageSchema = yup
  .object()
  .shape({
    productName: yup.string().required("Product is required"),
    quantity: yup
      .number()
      .required("Quantity is required")
      .typeError("You must specify number")
      .min(0, "Min value 0"),
    description: yup.string().required("Description is required"),
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
    imageFile: yup.mixed().required("Upload a file"),
    videoFile: yup.mixed().required("Upload a file"),
  })
  .required();
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productaddpageSchema),
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
    let temp = [...featureData];
    let obj = {};
    obj[key.target.value] = val?.target?.value;
    temp.push(obj);
    SetFeaturedata(temp);
  };

  const handleProductAdd = ({
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
    imageFile,
    videoFile,
  }) => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", productName);
    bodyFormData.append("category", selectedCategory.label);
    bodyFormData.append("subCategory", selectedSubCategory.label);
    bodyFormData.append("unit", selectedUnit.label);
    bodyFormData.append("quantity", quantity);
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);
    bodyFormData.append("offerUnit", selectedOfferunit.label);
    bodyFormData.append("offerQuantity", offerQuantity);
    bodyFormData.append("offerPrice", offerPrice);
    bodyFormData.append("productImage", imageFile);
    bodyFormData.append("productVideo", videoFile);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";

    axios
      .post("http://localhost:4000/product", bodyFormData, {
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

  console.log("featureData", featureData);
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{}} autoComplete="off">
          <form onSubmit={handleSubmit(handleProductAdd)}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  {...register("productName")}
                />
                <p>{errors?.productName?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Quantity"
                  {...register("quantity")}
                />
                <p>{errors?.quantity?.message}</p>
              </Grid>
              <Grid item xs={4}>
                {unitData?.length && (
                  <Autocomplete
                    options={unitData}
                    getOptionLabel={(option) => (option ? option.label : "")}
                    onChange={(e, val) => handleUnit(e, val)}
                    value={selectedUnit}
                    renderInput={(params) => (
                      <TextField {...params} label="Units" />
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
                    onChange={(e, val) => handleCategory(e, val)}
                    value={selectedCategory}
                    renderInput={(params) => (
                      <TextField {...params} label="Categories" />
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
                  onChange={(e, val) => handleSubCategory(e, val)}
                  value={selectedSubCategory}
                  renderInput={(params) => (
                    <TextField {...params} label="Subcategories" />
                  )}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  {...register("description")}
                />
                <p>{errors?.description?.message}</p>
              </Grid>
              {featureData.length &&
                featureData.map((item, index) => {
                  return (
                    <Grid key={index} container spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="name"
                          onChange={(e) => handleFeatureKey(e, null)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="value"
                          onChange={(e) => handleFeatureKey(null, e)}
                          value={item}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button variant="contained">+</Button>
                      </Grid>
                    </Grid>
                  );
                })}
              <Divider />
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Price"
                  {...register("price")}
                />
                <p>{errors?.price?.message}</p>
              </Grid>
              <Grid item xs={4}>
                {unitData?.length && (
                  <Autocomplete
                    options={unitData}
                    onChange={(e, val) => handleOfferUnit(e, val)}
                    value={selectedOfferunit}
                    renderInput={(params) => (
                      <TextField {...params} label="Units" />
                    )}
                  />
                )}
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Quantity"
                  {...register("offerQuantity")}
                />
                <p>{errors?.offerQuantity?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Offer Price"
                  {...register("offerPrice")}
                />
                <p>{errors?.offerPrice?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="file"
                  {...register("imageFile")}
                />
                {errors?.imageFile && <p>{errors?.imageFile?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="file"
                  {...register("videoFile")}
                />
                {errors?.videoFile && <p>{errors?.videoFile?.message}</p>}
              </Grid>
            </Grid>
            <Button variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              submit
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AddProduct;
