import * as React from "react";
import { useParams } from "react-router-dom";
import { URLS } from "../../../../config/urls.config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ProductImage from "../../../../assets/product-4.jpg";
import "./product-details.styles.scss";

const productdetailsSchema = yup
  .object()
  .shape({
    productName: yup.string().required(),
    productCategory: yup.string().required(),
    productSubcategory: yup.string().required(),
    productUnit: yup.string().required(),
    productQuantity: yup.string().required(),
    productDescription: yup.string().required(),
    productFeatures: yup.string().required(),
    productPrice: yup.string().required(),
  })
  .required();

const currencies = [
  {
    value: "Fruits",
    label: "Fruits",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const ProductDetails = () => {
  const [currency, setCurrency] = React.useState("Fruits");

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
            <form>
              <div className="main-product-details-heading">
                <h5 className="product-heading">Product Details</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Name"
                      fullWidth
                      size="small"
                      defaultValue="Kiwi"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Quantity"
                      fullWidth
                      size="small"
                      defaultValue="10"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-helperText"
                      label="Unit"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
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
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Subcategory"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
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
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Features"
                      fullWidth
                      size="small"
                      defaultValue="Vitamin C"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="outlined-helperText"
                      label="Value"
                      fullWidth
                      size="small"
                      defaultValue="154%"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <AddIcon color="primary" className="add-icon-section" />
                  </Grid>
                </Grid>
                <Grid container marginTop={1} spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Price"
                      fullWidth
                      size="small"
                      defaultValue="80"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Unit"
                      fullWidth
                      size="small"
                      defaultValue="Kg"
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
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Offer Price"
                      fullWidth
                      size="small"
                      defaultValue="20"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <Card fullWidth>
                      <CardMedia
                        component="img"
                        height="140"
                        image={ProductImage}
                        alt="green iguana"
                      />
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent> */}
                      <CardActions>
                        <Button variant="contained" fullWidth component="label">
                          Upload Image
                          <input type="file" hidden />
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card fullWidth>
                      <CardMedia
                        component="img"
                        height="140"
                        image={ProductImage}
                        alt="green iguana"
                      />
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent> */}
                      <CardActions>
                        <Button variant="contained" fullWidth component="label">
                          Upload Video
                          <input type="file" hidden />
                        </Button>
                      </CardActions>
                    </Card>
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

export default ProductDetails;
