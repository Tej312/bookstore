import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import LoginStyle from "./style";
import { Formik } from "formik";
import authService from "../../service/authservice";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/enum";
import { useAuthContext } from "../../context/auth";
import ValidationErrorMessage from "../../component/ValidateErrorMessage";
const Login = () => {
  const authContext = useAuthContext();
  const classes = LoginStyle();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    password: Yup.string()
      .min(5, "password should be more than 5 character")
      .required("password is required"),
  });

  const onSubmit = (data) => {
    authService.login(data).then((res) => {
      toast.success("Login successfully");
      authContext.setUser(res);
      navigate(RoutePaths.BookListing);
    });
  };
  return (
    <>
      <div className={classes.loginWrapper}>
        <div className="main">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, handleChange, handleSubmit, touched }) => {
              return (
                <>
                  <div className="container">
                    <h1 className="head">LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                      <table className="table">
                        <tr>
                          <td>Email</td>
                          <td>
                            <div className="form-col">
                              <TextField
                                name="email"
                                onChange={handleChange}
                                variant="outlined"
                                label="Enter your Email"
                              />
                              <ValidationErrorMessage
                                message={errors.email}
                                touched={touched.email}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Password</td>
                          <td>
                            <div className="form-col">
                              <TextField
                                name="password"
                                onChange={handleChange}
                                variant="outlined"
                                label="Enter your Password"
                                type="password"
                              />
                              <ValidationErrorMessage
                                message={errors.password}
                                touched={touched.password}
                              />
                            </div>

                            {/* {errors.password ? errors.password : ""} */}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <Button
                              type="submit"
                              color="secondary"
                              variant="contained"
                              className="button"
                              disableElevation
                              onClick={handleSubmit}
                            >
                              Login
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <h4>
                              For create a new account{" "}
                              <NavLink to={RoutePaths.Register}>
                                Click here!
                              </NavLink>{" "}
                            </h4>
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
      </div>
    </>
  );
};
export default Login;
