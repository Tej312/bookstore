import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../constant/constant";
import background from "../../../assets/images/download.jpeg";

const editUserStyle = makeStyles((theme) => ({
  editUserWrapper: {
    padding: "13px 0 100% 0",
    backgroundColor: "#F1F9FF",

    "& .container": {
      width: "40%",
      margin: "0 30% 0 50%",
      padding: "0 0 20px 0",
      border: "3px solid #006685",
      borderRadius: "25px",
    },

    "& .main": {
      padding: "50px 20px 300px 20px ",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "1700px 600px",
    },
    "& .head": {
      display: "flex",
      justifyContent: "center",
    },
    "& .btn-wrapper": {
      display: "flex",
      justifyContent: "center",
      "& .btn": {
        height: "40px",
        lineHeight: "40px",
        borderRadius: "4px",
        textTransform: "none",
        fontSize: "16px",
        minWidth: "100px",
        "&+.btn": {
          marginLeft: "10px",
        },
      },
    },
    "& .form-row-wrapper": {
      "& .form-col": {
        display: "flex",
        justifyContent: "center",
        "&.full-width": {
          maxWidth: "100%",
          flex: "0 0 100%",
        },
        "& .role": {
          width: "220px",
        },
        "& p": {
          "&.text-danger": {
            fontSize: "14px",
            color: colors.primary,
            position: "absolute",
            top: "70%",
            margin: "0",
          },
        },
      },
      "& .MuiInputBase-formControl": {
        marginBottom: "35px",
      },
    },
    "& .dropdown-wrapper": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "0",
      },
      "& .MuiInputBase-input": {
        backgroundColor: colors.white,
        height: "40px",
        lineHeight: "40px",
        borderRadius: "4px",
      },
    },
  },
}));

export { editUserStyle };
