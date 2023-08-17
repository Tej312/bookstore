import React, { useEffect, useState } from "react";
import { editStyle } from "./style";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import categoryService from "../../../service/category.service";
import { Formik } from "formik";
import { toast } from "react-toastify";
import Shared from "../../../utils/shared";

const EditCategory = () => {
  const classes = editStyle();
  const navigate = useNavigate();
  const initialValues = { name: "" };
  const [initialValueState, setInitialValueState] = useState(initialValues);
  const { id } = useParams();

  useEffect(() => {
    if (id) getCategoryById();
  }, [id]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Category Name is required"),
  });

  const getCategoryById = () => {
    categoryService.getById(Number(id)).then((res) => {
      setInitialValueState({
        id: res.id,
        name: res.name,
      });
    });
  };

  const onSubmit = (values) => {
    categoryService
      .save(values)
      .then((res) => {
        toast.success(Shared.messages.UPDATED_SUCCESS);
        navigate("/category");
      })
      .catch((e) => toast.error(Shared.messages.UPDATED_FAIL));
  };
  return (
    <div className={classes.editWrapper}>
      <div className="container">
        <h1 className="head">Add New Category</h1>
        <Formik
          initialValues={initialValueState}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-row-wrapper">
                <div className="form-col">
                  <TextField
                    id="first-name"
                    name="name"
                    label="Category Name *"
                    variant="outlined"
                    inputProps={{ className: "small" }}
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name ? errors.name : ""}
                </div>
              </div>
              <div className="btn-wrapper">
                <Button
                  className="green-btn btn"
                  variant="contained"
                  type="submit"
                  color="secondary"
                  disableElevation
                >
                  Save
                </Button>
                <Button
                  className="pink-btn btn"
                  variant="contained"
                  type="button"
                  color="secondary"
                  disableElevation
                  onClick={() => {
                    navigate("/category");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditCategory;
