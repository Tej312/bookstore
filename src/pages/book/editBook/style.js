import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../constant/constant";

const editStyle = makeStyles((theme) => ({
  editWrapper: {
    backgroundColor: "#F1F9FF",
    

    "& .container": {
      backgroundColor: "#D5F5FF",
      border: "5px solid #006685",
      borderRadius: "25px",
            display: "flex",
      justifyContent: "center",
      padding: "20px 20px 20px 20px",
      margin:"0 20% 0 20%"
    },
    "& .head": {
      display: "flex",
      justifyContent: "center",
    },
    padding: "0 0 80px",

    "& .btn-wrapper": {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "10px",
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
      margin: "0 -15px",
      "& .MuiOutlinedInput-multiline": {
        padding: "0",
        backgroundColor: colors.white,
        "& .MuiOutlinedInput-inputMultiline": {
          padding: "5px 15px !important",
          borderRadius: "0",
          lineHeight: "1.2",
          border: "1px solid #d5d5d5",
          height: "80px !important",
        },
      },
      "& .form-col": {
        padding: " 0 15px",
        maxWidth: "50%",
        flex: "0 0 50%",
        position: "relative",

        "&.description": {
          "& .text-danger": {
            top: "77%",
          },
        },
        "& .uploaded-file-name": {
          marginBottom: "35px",
          paddingTop: "28px",
          "& .main-x-btn": {
            backgroundColor: "#6EABD3",
          },

          "& em": {
            height: "30px",
            width: "30px",
            display: "inline-block",
            marginRight: "10px",
          },
          "& span": {
            display: "inline-block",
            margin: "-10px -10px -10px 0",
            padding: "10px",
            cursor: "pointer",
            fontSize: "20px",
            color: "#000",
            fontWeight: 700,
          },
        },
        "& .file-upload-btn": {
          position: "relative",
          display: "block",
          marginBottom: "35px",
          paddingTop: "25px",

          "& .btn": {
            lineHeight: "40px",
            height: "40px",
            padding: "0 10px",
            minWidth: "120px",
            position: "absolute",
            borderRadius: "0px",
            textTransform: "none",
            fontSize: "16px",
            left: "0",
          },
        },
        "&.full-width": {
          maxWidth: "100%",
          flex: "0 0 100%",
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
  },
}));

export { editStyle };
