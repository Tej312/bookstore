import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const cartStyle = makeStyles((theme) => ({
  cartWrapper: {
    maxWidth: "700px",
    padding: "0 50px 0 50px",
    margin: "10px auto",
    backgroundColor: "#F1F9FF",
    border: "2px solid #00A4D6",
    borderRadius: "8px",
    "& .btn-wrapper": {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },

    "& .cart-heading-block": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
      fontWeight: "500",

      "& h2": {
        paddingBottom: "0",
        marginBottom: "0",
        fontSize: "18px",

        "&:after": {
          display: "none",
        },
      },
    },
    "& .cart-list-wrapper": {
      margin: "0 0 35px",
      "& .cart-list-item": {
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid rgba(0,0,0,0.2)",
        padding: "15px",
        borderRadius: "5px",

        "&+.cart-list-item": {
          marginTop: "30px",
        },
        "& .cart-item-img": {
          maxWidth: "150px",
          flex: "0 0 150px",
          minHeight: "100px",

          "& a": {
            display: "block",
            position: "relative",
            height: "100%",
            cursor: "pointer",

            "& img": {
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              width: "100% ",
              objectFit: "cover",
            },
          },
        },
        " & .cart-item-content": {
          flex: "1",
          paddingLeft: "20px",

          "& .cart-item-top-content": {
            display: "flex",
            justifyContent: "space-between",
            margin: "0 0 10px",

            "& .cart-item-left": {
              marginRight: "10px",

              "& a": {
                color: colors.primary,
                textDecoration: "none",
                cursor: "pointer",
              },
            },
            "& .price-block": {
              "& span": {
                display: "block",
                "&.current-price": {
                  fontWeight: "700",
                  textAlign: "right",
                },
              },
              "& .actual-price": {
                color: colors.lightTextColor,
                display: "flex",
                " & span": {
                  textDecoration: "line-through",
                },
                "& em": {
                  color: colors.primary,
                  marginLeft: "10px",
                  fontWeight: "600",
                },
              },
            },
          },
          "& .cart-item-bottom-content": {
            display: "flex",
            justifyContent: "space-between",
            "& a": {
              color: colors.primary,
              textDecoration: "none",
              cursor: "pointer",
            },
            "& .qty-group": {
              display: "flex",
            },
            "& .btn": {
              minWidth: "20px",
              padding: "0",
              height: "20px",
              lineHeight: "20px",
            },
            "& .number-count": {
              border: "1px solid #ccc",
              display: "inline-block",
              minWidth: "20px",
              textAlign: "center",
              lineHeight: "20px",
              height: "20px",
              margin: "0 10px",
            },
          },
          "& .brand": {
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "2px",
          },
        },
      },
    },
  },
}));

export { cartStyle };
