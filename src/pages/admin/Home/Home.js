import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { URLS } from "../../../config/urls.config";

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productImageFile: [{ images: "" }],
    },
  });
  const {
    fields: productImageFields,
    append: productFieldAppend,
    remove: productFieldRemove,
  } = useFieldArray({
    control,
    name: "productImageFile",
  });
  const watchProductImageArray = watch("productImageFile");
  const controlledProductImageFields = productImageFields?.map(
    (field, index) => {
      return {
        ...field,
        ...watchProductImageArray[index],
      };
    }
  );

  const handleUploadImages = ({ productImageFile }) => {
    const bodyFormData = new FormData();
    if (productImageFile) {
      for (const values of productImageFile) {
        bodyFormData.append("productImage", values.images[0]);
      }
    } else {
    }
    axios
      .post(`${URLS.slider}`, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("Response=>>", response);
      })
      .catch((error) => {
        console.log("Errorss=>>", error);
      });
  };

  return (
    <div className="feature-add">
      <form onSubmit={handleSubmit(handleUploadImages)}>
        <Grid item className="add-icon">
          <AddIcon
            onClick={() => productFieldAppend({ images: "" })}
            color="primary"
            className="add-icon-section"
          />
        </Grid>

        {controlledProductImageFields?.map((list, index) => {
          return (
            <Grid
              key={list.id}
              className="add-section"
              container
              spacing={2}
              marginTop={1}
            >
              <Grid item xs={6}>
                {list?.images[0] && (
                  <img
                    src={URL?.createObjectURL(list?.images[0])}
                    alt="ProductImage"
                  />
                )}
                <Typography> {list && list?.images[0]?.name}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  className="file-btn"
                  fullWidth
                  component="label"
                >
                  Upload Image
                  <input
                    {...register(`productImageFile.${index}.images`, {
                      required: true,
                    })}
                    type="file"
                    hidden
                  />
                </Button>
                {errors.productImageFile?.[index]?.images && (
                  <div className="error">Image is required</div>
                )}
              </Grid>
              <Grid item xs={1} className="remove-section">
                {controlledProductImageFields.length > 1 && (
                  <button
                    onClick={() => productFieldRemove(index)}
                    className="close-section"
                  >
                    <HighlightOffIcon />
                  </button>
                )}
              </Grid>
            </Grid>
          );
        })}
        <Grid>
          <Button type="submit">submit</Button>
        </Grid>
      </form>
    </div>
  );
}

export default Home;
