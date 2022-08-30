import * as React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../../config/urls.config";
import { useState } from "react";

import { Box, Button, MenuItem, TextField, Autocomplete } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "./add-stock.styles.scss";
// const stockaddSchema = yup
//   .object()
//   .shape({
//     productname: yup.string().required(),
//     productquantity: yup.string().required(),
//   })
//   .required();

const AddStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [currency, setCurrency] = React.useState("Fruits");
  const [unitData, setUnitdata] = useState([
    { label: "kg", value: "kg" },
    { label: "g", value: "g" },
    { label: "ltr", value: "ltr" },
    { label: "no:", value: "no" },
  ]);
  const [selectedUnit, setSelectedunit] = useState([]);
  const [stockCategoryData, setStockCategoryData] = useState([]);
  const [selectedStockCategory, setSelectedStockCategory] = useState([]);
  const [selectedStockSubCategory, setSelectedStockSubCategory] = useState([]);

  // const handleProduct = (e, val) => setSelectedStockProduct(val);

  React.useEffect(() => {
    getCategoryListApi();
  }, []);
  const getCategoryListApi = () => {
    axios
      .get(`${URLS.category}`)
      .then((res) => {
        setStockCategoryData(res.data);
        // setStockProductdata(res.data);
        console.log("resss", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleUnit = (e, val) => {
    console.log("val", val);
    setSelectedunit(val);
    console.log("selectedunit", val);
  };
  const handleStockCategory = (e, val) => {
    setSelectedStockCategory(val);
    console.log("selectedcategory", selectedStockCategory);
  };
  const handleStockSubCategory = (e, val) => setSelectedStockSubCategory(val);

  const handleStockAddpage = (data) => {
    console.log("StockAddpage Details", data);
  };
  return (
    <div className="add-stock">
      <Box noValidate autoComplete="off" className="stock-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="add-stock-container"
        >
          <div className="stock-form-section col-md-8">
            <form onSubmit={handleSubmit(handleStockAddpage)}>
              <div className="main-heading">
                <h5 className="heading">Stock</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {stockCategoryData?.length && (
                      <Autocomplete
                        options={stockCategoryData}
                        getOptionLabel={(option) => option.label || ""}
                        isOptionEqualToValue={(option, value) =>
                          option._id === value._id
                        }
                        onChange={(e, val) => handleStockCategory(e, val)}
                        value={selectedStockCategory}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Categories"
                            size="small"
                            {...register("stockCategory")}
                          />
                        )}
                      />
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      options={
                        selectedStockCategory?.SubCategory?.length
                          ? selectedStockCategory?.SubCategory
                          : []
                      }
                      getOptionLabel={(option) => option.label || ""}
                      isOptionEqualToValue={(option, value) =>
                        option.label === value.label
                      }
                      onChange={(e, val) => handleStockSubCategory(e, val)}
                      value={selectedStockSubCategory}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Subcategories"
                          size="small"
                          {...register("stockSubCategory")}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/* {stockProductData?.length && (
                      <Autocomplete
                        options={stockProductData}
                        getOptionLabel={(option) => option.name || ""}
                        isOptionEqualToValue={(option, value) =>
                          option._id === value._id
                        }
                        onChange={(e, val) => handleProduct(e, val)}
                        value={selectedStockProduct}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="ProductName"
                            size="small"
                            {...register("productName")}
                          />
                        )}
                      />
                    )} */}
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="number"
                      id="outlined-read-only-input"
                      label="Quantity"
                      size="small"
                      fullWidth
                      error={errors?.productquantity}
                      {...register("productquantity", {
                        required: "This is required.",
                      })}
                    />
                    <div className="error">
                      {errors?.productquantity?.message}
                    </div>
                  </Grid>
                  <Grid item xs={3}>
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

export default AddStock;
