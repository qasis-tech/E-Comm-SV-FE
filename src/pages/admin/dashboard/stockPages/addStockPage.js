import * as React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";
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

  const navigate = useNavigate();
  React.useEffect(() => {
    getCategoryListApi();
  }, []);

  React.useEffect(() => {
    if (selectedStockCategory.length !== 0) {
      getProductListApi();
    }
  }, [selectedStockCategory, selectedStockSubCategory]);

  const getCategoryListApi = () => {
    axios
      .get(`${URLS.category}`)
      .then((res) => {
        setStockCategoryData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getProductListApi = () => {
    let URL =
      selectedStockCategory.length !== 0
        ? `${URLS.product}?category=${selectedStockCategory.label}&subCategory=${selectedStockSubCategory.label}`
        : null;
    axios
      .get(URL)
      .then((res) => {
        setStockProductdata(res.data);
      })
      .catch((err) => {
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
        setStockData(res.data);
        if (res.success) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.stockList}`);
        }
      })
      .catch((err) => {
        console.log("errors in post stock", err);
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
                          {...register("stockSubCategory")}
                        />
                      )}
                    />
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
                            {...register("productName")}
                          />
                        )}
                      />
                    ) : null}
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="number"
                      id="outlined-read-only-input"
                      label="Quantity"
                      size="small"
                      fullWidth
                      error={errors?.productQuantity}
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
