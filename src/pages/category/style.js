import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const productStyle = makeStyles((theme) => ({
  productWrapper: {
    backgroundColor: colors.grayBg,
    padding: "10px 100px 50px 100px ",
    "& .end": {
      display: "flex",
      justifyContent: "center",
    },

    "& .head": {
      display: "flex",
      justifyContent: "center",
    },

    "& .btn-wrapper": {
      textAlign: "right",
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "10px",
      "& .search": {
        height: "25px",
      },
      "& .MuiOutlinedInput-input": {
        padding: "10px 0 10px 100px",
        // margin:"0  0 0"
      },
      "& .btn": {
        height: "40px",
        lineHeight: "40px",
        minWidth: "100px",
        marginLeft: "10px",
        padding: "0 10px",
        fontSize: "14px",
      },
      "& .MuiFormControl-fullWidth": {
        maxWidth: "300px",
      },
    },
    "& .MuiTable-root": {
      "& .MuiTableBody-root": {
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            "&:last-child": {
              paddingRight: "0",
              textAlign: "right",
            },
          },
        },
      },
      "& .green-btn": {
        height: "30px",
        marginRight: "10px",
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        padding: "10px 40px 10px 40px",
        backgroundColor: "#BDE7FF",
        textTransform: "capitalize",
        color: "#003F63",
        border: "2px solid #94B5C8",
        "&:hover": {
          backgroundColor: "#003F63",
          color: "#fff",
          border: "3px solid #000 ",
        },
      },
      "& .pink-btn": {
        marginRight: "20px",
        height: "30px",
        padding: "10px 30px 10px 30px",
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        backgroundColor: "#FFC8C8",
        color: "#840000",
        border: "1px solid #FF0000",
        marginLeft: "10px",
        borderRadius: "4px",
        "&:hover": {
          border: "3px solid #000",
          backgroundColor: "#840000",
          color: "#fff",
        },
      },
    },
  },
}));

export { productStyle };
