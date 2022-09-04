import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { URLS } from "../../../../config/urls.config";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, MenuItem, TextField, Autocomplete } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function OrderDetails() {
  const orderdetailsSchema = yup.object().shape({
    orderCategory: yup.string(),
    orderSubcategory: yup.string(),
    //   orderEmail: yup.string().email().required(),
    //   orderAddress: yup.string().required(),
    //   orderLocation: yup.string().required(),
    //   orderMobilenumber: yup
    //     .string()
    //     .phone("IN", true, "Mobile Number is invalid")
    //     .required(),
    //   orderPincode: yup
    //     .string()
    //     .matches(/^[1-9][0-9]{5}$/, "Invalid zipcode (682315)"),
    //   orderStatus: yup.string().required(),
  });
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
    resolver: yupResolver(orderdetailsSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: "Please enter your first name.",
        })} // custom message
      />
      <input type="submit" />
    </form>
  );
}
