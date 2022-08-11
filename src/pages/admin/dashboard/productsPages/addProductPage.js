import { Box, Button, MenuItem, TextField } from "@mui/material";
import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

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
    features: yup.string().required("Features is required"),
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
    // imageFile: yup.array().required("Upload a file"),

    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // })
    // videoFile: yup.mixed().required("Upload a file"),
    // .test("fileSize", "The file is too large", (value) => {
    //   return value && value[0].size <= 2000000;
    // })
    // .test("type", "We only support jpeg", (value) => {
    //   return value && value[0].type === "image/jpeg";
    // }),
  })
  .required();

// const currencies = [
//   {
//     value: "Fruits",
//     label: "Fruits",
//   },
//   {
//     value: "EUR",
//     label: "€",
//   },
//   {
//     value: "BTC",
//     label: "฿",
//   },
//   {
//     value: "JPY",
//     label: "¥",
//   },
// ];

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productaddpageSchema),
  });
  const [categoryData, setCategorydata] = useState([]);
  const [unitData, setUnitdata] = useState(["Kg", "Ltr", "no:"]);
  const [subCategorydata, setSubcategorydata] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/category")
      .then((res) => {
        console.log("resss", res.data.data);
        setCategorydata(res.data.data);
        // setSubcategorydata(res.data.data.subCategory);
        console.log("subcategory", res.data.data.subCategory);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleCategory = (event, index) => {
    console.log("event", event);
    // setCategorydata();
  };
  const handleUnit = (event) => {
    setUnitdata(event.target.value);
  };
  const handleSubcategory = (event) => {
    setSubcategorydata(event.target.value);
  };
  const handleProductAddpage = ({
    productName,
    category,
    subCategory,
    quantity,
    description,
    features,
    price,
    offerQuantity,
    offerPrice,
  }) => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", productName);
    // bodyFormData.append("category", category);
    // bodyFormData.append("subCategory", subCategory);
    bodyFormData.append("quantity", quantity);
    bodyFormData.append("description", description);
    bodyFormData.append("features", features);
    bodyFormData.append("price", price);
    bodyFormData.append("offerQuantity", offerQuantity);
    bodyFormData.append("offerPrice", offerPrice);
    // bodyFormData.append("productImage", imageFile);
    // bodyFormData.append("productVideo", videoFile);

    axios
      .post("http://localhost:4000/product", bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("Response=>>", response);
      })
      .catch((error) => {
        //handle error
        console.log("Errorss=>>", error);
      });

    // console.log("ProductAddpage Details", data);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleProductAddpage)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  {...register("productName")}
                />
                <p>{errors?.productName?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Category"
                  value={categoryData}
                  onChange={(e, index) => handleCategory(e, index)}
                >
                  {categoryData.map((option, index) => (
                    <MenuItem key={option._id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Subcategory"
                  value={subCategorydata}
                  onChange={handleSubcategory}
                >
                  {subCategorydata.map((option) => (
                    <MenuItem>{option.title}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Unit"
                  value={unitData}
                  onChange={handleUnit}
                >
                  {unitData.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                  ))}
                </TextField>
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Features"
                  multiline
                  rows={4}
                  {...register("features")}
                />
                <p>{errors?.features?.message}</p>
              </Grid>
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
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Unit"
                  value={unitData}
                  onChange={handleUnit}
                >
                  {unitData.map((option) => (
                    <MenuItem>{option.offerUnit}</MenuItem>
                  ))}
                </TextField>
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
