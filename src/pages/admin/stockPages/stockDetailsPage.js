import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { URLS } from "../../../config/urls.config";
import RouterList from "../../../routes/routerList";
import Loader from "../../../components/Loader";

import Grid from "@mui/material/Grid";
import { Box, Button, MenuItem, TextField } from "@mui/material";

import "./stock-details.styles.scss";

const StockDetails = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [stockDetailData, setStockDetail] = useState([]);
  const [isLoading, setLoader] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getStockDetailsApi();
  }, []);

  const getStockDetailsApi = () => {
    setLoader(true);
    axios
      .get(`${URLS.stock}/${id}`)
      .then((res) => {
        setLoader(false);
        setStockDetail(res.data);
        setValue("productName", res.data.product);
        setValue("category", res.data.category);
        setValue("subCategory", res.data.subCategory);
      })
      .catch((err) => {
        setLoader(false);
        console.log("ERROR in STOCK LIst", err);
      });
  };

  const putStockDetailsApi = ({ quantity }) => {
    setLoader(true);
    let payload = {
      product: stockDetailData.product,
      category: stockDetailData.category,
      subCategory: stockDetailData.subCategory,
      quantity: quantity,
      unit: stockDetailData.unit,
    };
    axios
      .put(`${URLS.stock}/${id}`, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        if (res) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.stockList}`);
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log("Error in put api STOCK===>>>", err);
      });
  };

  return (
    <div className="details-stock">
      <Box noValidate autoComplete="off" className="stock-details-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="details-stock-container"
        >
          <div className="stock-details-form-section col-md-8">
            <form onSubmit={handleSubmit(putStockDetailsApi)}>
              <div className="main-heading">
                <h5 className="heading">Stock Details</h5>
              </div>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="main-form-container">
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        label="Name"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        {...register("productName", {
                          required: "Name is required",
                        })}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        label="Quantity"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        {...register("quantity", {
                          required: "Quantity is required",
                        })}
                      />
                      <div className="error">{errors?.quantity?.message}</div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        label="category"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        {...register("category", {
                          required: "Category is required",
                        })}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        label="Subcategory"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        {...register("subCategory", {
                          required: "SubCategory ir required",
                        })}
                      />
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

export default StockDetails;
