import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";
import Loader from "../../../../components/Loader";

import { Box, Button, MenuItem, TextField, Autocomplete } from "@mui/material";
import Grid from "@mui/material/Grid";

import "./add-stock.styles.scss";

const AddStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  const [stockProductData, setStockProductdata] = useState([]);
  const [selectedStockProduct, setSelectedStockProductData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [isLoading, setLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getCategoryListApi();
  }, []);

  useEffect(() => {
    if (selectedStockCategory.length !== 0) {
      getProductListApi();
    }
  }, [selectedStockCategory, selectedStockSubCategory]);

  const getCategoryListApi = () => {
    setLoader(true);
    axios
      .get(`${URLS.category}`)
      .then((res) => {
        setLoader(false);
        setStockCategoryData(res.data);
      })
      .catch((err) => {
        setLoader(false);
        console.log("error", err);
      });
  };

  const getProductListApi = () => {
    setLoader(true);
    let URL =
      selectedStockCategory.length !== 0
        ? `${URLS.product}?category=${selectedStockCategory.label}&subCategory=${selectedStockSubCategory.label}`
        : null;
    axios
      .get(URL)
      .then((res) => {
        setLoader(false);
        setStockProductdata(res.data);
      })
      .catch((err) => {
        setLoader(false);
        console.log("error", err);
      });
  };

  const handleUnit = (e, val) => {
    console.log("val", val);
    setSelectedunit(val);
  };

  const handleStockCategory = (e, val) => {
    setSelectedStockCategory(val);
  };

  const handleStockSubCategory = (e, val) => setSelectedStockSubCategory(val);

  const handleProduct = (e, val) => setSelectedStockProductData(val);

  const handleStockAddpage = ({ productQuantity }) => {
    setLoader(true);
    let payload = {
      product: selectedStockProduct.name,
      category: selectedStockCategory.label,
      subCategory: selectedStockSubCategory.label,
      quantity: productQuantity,
      unit: selectedUnit.value,
    };
    axios
      .post(`${URLS.stock}`, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        setStockData(res.data);
        if (res.success) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.stockList}`);
        }
      })
      .catch((err) => {
        setLoader(false);
        setStockData([]);
        console.log("Errors in post stock", err);
      });
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
              {isLoading ? (
                <Loader />
              ) : (
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
                              {...register("stockCategory", {
                                required: "This is required",
                              })}
                            />
                          )}
                        />
                      )}
                      <div className="error">
                        {errors?.stockCategory?.message}
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <Autocomplete
                        options={
                          selectedStockCategory?.subCategory?.length
                            ? selectedStockCategory?.subCategory
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
                            {...register("stockSubCategory", {
                              required: "This is required",
                            })}
                          />
                        )}
                      />
                      <div className="error">
                        {errors?.stockSubCategory?.message}
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      {stockProductData ? (
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
                              {...register("productName", {
                                required: "This is required",
                              })}
                            />
                          )}
                        />
                      ) : null}
                      <div className="error">
                        {errors?.productName?.message}
                      </div>
                    </Grid>

                    <Grid item xs={3}>
                      <TextField
                        type="number"
                        id="outlined-read-only-input"
                        label="Quantity"
                        size="small"
                        fullWidth
                        {...register("productQuantity", {
                          required: "This is required.",
                        })}
                      />
                      <div className="error">
                        {errors?.productQuantity?.message}
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
                              {...register("units", {
                                required: "This is required",
                              })}
                            />
                          )}
                        />
                      )}
                      <div className="error">{errors?.units?.message}</div>
                    </Grid>
                  </Grid>
                </div>
              )}
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button>Cancel</Button>
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

export default AddStock;
