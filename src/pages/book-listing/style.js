import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const productListingStyle = makeStyles((theme) => ({
  productListWrapper: {
    padding: "10px 0 80px",
    backgroundColor: "#F1F9FF",

    "& .pagination-wrapper": {
      display: "flex",
      justifyContent: "center",
    },
    "& .container": {
      margin: "5px 80px 0 80px",
      border: "3px solid #006685",
      borderRadius: "4px",
      padding: "5px 20px 0 20px",
      backgroundColor: "#EEF8FF",
    },
    "& .head": {
      display: "flex",
      justifyContent: "center",
      margin: "0 0 20px 0",
      textDecoration: "underline",
    },

    "& .title-wrapper": {
      display: "flex",
      justifyContent: "space-between",

      "& .search": {
        padding: "0 10px 0 10px",
      },
      "& .sortBy": {
        padding: "0 0 0 0",
        margin: "0 5px 0 0",
      },
      "& .MuiTypography-h2": {
        padding: "0",
        margin: "0",

        "&:after": {
          display: "none",
        },
      },
      "& .MuiFormControl-root": {
        maxWidth: "270px",
        flex: "0 0 270px",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "inherit",
        alignItems: "center",
        justifyContent: "flex-end",

        "& .MuiSelect-selectMenu": {
          height: "10px",
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
        },
        "& .MuiOutlinedInput-input": {
          padding: "5px 0 5px 0",
        },
        "& .MuiInputLabel-formControl": {
          margin: "0px 10px 0px 0px",
        },
      },
    },
    "& .product-list-wrapper": {
      marginTop: "30px",
      "& .product-list-inner-wrapper": {
        display: "flex",
        flexWrap: "wrap",

        "& .product-list": {
          maxWidth: "22.7%",
          flex: "0 0 25%",
          padding: "0 15px",
          marginBottom: "30px",

          "& .product-list-inner": {
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "10px",
          },
          "& .image": {
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
          "& em": {
            display: "block",
            position: "relative",
            paddingBottom: "82.8%",
            borderRadius: "10px 10px 0 0",

            "& img": {
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              borderRadius: "10px 10px 0 0",
              objectFit: "cover",
            },
          },
          "& .content-wrapper": {
            padding: "20px 15px",
            backgroundColor: "#A6DEFE",

            "& .addBtn": {
              width: "100%",
            },
            "& h3": {
              fontSize: "26px",
              marginBottom: "2px",
              fontWeight: "700",
              lineHeight: "1",
              height: "27px",
              display: "-webkit-box",
              "-webkit-line-clamp": 1,
              "-webkit-box-orient": "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
            },
            "& .category": {
              display: "block",
              marginBottom: "10px",
              color: colors.lightTextColor,
              fontWeight: "500",
            },
            "& .description": {
              fontSize: "16px",
              height: "40px",
              display: "-webkit-box",
              "-webkit-line-clamp": 2,
              "-webkit-box-orient": "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
            },
            "& .price": {
              margin: "20px 0",
              fontSize: "18px",
              fontWeight: "700",
              "& .discount-price": {
                display: "block",
                color: colors.lightTextColor,
                fontWeight: "400",
                fontsize: "16px",

                "& .discount-percentage": {
                  color: colors.greenText,
                  fontWeight: "600",
                },
              },
            },
            "& .btn": {
              "&.pink-btn": {
                height: "40px",
                lineHeight: "40px",
                fontSize: "16px",
                padding: "0 20px",
                width: "100%",
                borderRadius: "6px",
              },
            },
          },
        },
      },
    },
  },
}));

export { productListingStyle };
