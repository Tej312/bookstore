import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const productStyle = makeStyles((theme) => ({
  productWrapper: {
    padding: "20px 0 20px 0",
    backgroundColor:colors.grayBg,

    "& .end": {
      display:"flex",
      justifyContent:"center"
    },
    "& .head": {
      display:"flex",
      justifyContent:"center"
    },
    "& .btn-wrapper": {
      textAlign: "right",
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "10px",
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
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        backgroundColor: "#FFC8C8",
        color: "#840000",
        border: "1px solid #FF0000",
        marginLeft: "10px",
        borderRadius: "4px",
        padding: "0 10px",
        "&:hover": {
          border: "3px solid #000",
          backgroundColor: "#840000",
          color: "#fff",
        },
      },
    },
    "& .MuiTablePagination-root": {
      marginTop: "20px",
      "& .MuiTablePagination-toolbar": {
        paddingRight: "20px",

        "& .MuiSelect-selectMenu": {
          height: "40px",
          paddingRight: "25px !important",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiSelect-nativeInput": {
          top: "0",
        },
      },
    },
  },
}));

export { productStyle };
