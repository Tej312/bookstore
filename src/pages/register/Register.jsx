import { InputLabel, FormControl, MenuItem, Select } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import authservice from "../../service/authservice";
import { toast } from "react-toastify";
import RegisterStyle from "./style";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/enum";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
const Register = () => {
  const classes = RegisterStyle();
  const materialClasses = materialCommonStyles();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    roleId: "",
    firstName: "",
    lastName: "",
  };

  const roleList = [
    { id: 3, name: "buyer" },
    { id: 2, name: "seller" },
  ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("please enter firstname"),
    lastName: Yup.string().required("please enter lastname"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    roleId: Yup.number().required("please enter roleId"),
    password: Yup.string()
      .min(5, "password should be more than 5 character")
      .required("password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password not match"
    ),
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;
    authservice.create(data).then((res) => {
      navigate(RoutePaths.Login);
      toast.success("Successfully Register");
    });
  };
  return (
    <>
      <div className={classes.registerWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => {
            return (
              <>
                <div className="container">
                  <h1 className="head">Registration form</h1>
                  <form onSubmit={handleSubmit}>
                    <table className="table">
                      <tr>
                        <td className="hi">First Name</td>
                        <td>
                          <TextField
                            name="firstName"
                            onChange={handleChange}
                            variant="outlined"
                            label="Enter your first name"
                          />
                          {errors.firstName ? errors.firstName : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Last Name</td>
                        <td>
                          <TextField
                            name="lastName"
                            onChange={handleChange}
                            variant="outlined"
                            label="Enter your last name"
                          />
                          {errors.lastName ? errors.lastName : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Role Id</td>
                        <td>
                          <div className="form-col">
                            <FormControl
                              className="dropdown-wrapper"
                              variant="outlined"
                            >
                              <InputLabel htmlFor="select">Roles</InputLabel>
                              <Select
                                name="roleId"
                                id={"roleId"}
                                inputProps={{ className: "small" }}
                                onChange={handleChange}
                                className={materialClasses.customSelect}
                                MenuProps={{
                                  classes: {
                                    paper: materialClasses.customSelect,
                                  },
                                }}
                                value={values.roleId}
                              >
                                {roleList.length > 0 &&
                                  roleList.map((role) => (
                                    <MenuItem
                                      value={role.id}
                                      key={"name" + role.id}
                                    >
                                      {role.name}
                                    </MenuItem>
                                  ))}
                              </Select>
                            </FormControl>
                          </div>
                          {errors.roleId ? errors.roleId : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <TextField
                            name="email"
                            onChange={handleChange}
                            variant="outlined"
                            label="Enter your Email"
                          />
                          {errors.email ? errors.email : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Password</td>
                        <td>
                          <TextField
                            name="password"
                            onChange={handleChange}
                            variant="outlined"
                            label="Enter your Password"
                            type="password"
                          />
                          {errors.password ? errors.password : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Confirm password</td>
                        <td>
                          <TextField
                            name="confirmPassword"
                            onChange={handleChange}
                            variant="outlined"
                            label="Confirm Password"
                            type="password"
                          />
                          {errors.confirmPassword ? errors.confirmPassword : ""}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className="rbutton"
                          >
                            Register
                          </Button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
export default Register;
