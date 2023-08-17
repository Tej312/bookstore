import { makeStyles } from "@material-ui/core/styles";
import flagImage from "../../assets/images/flag-dropdown.png";
import { colors } from "../../constant/constant";

const headerStyle = makeStyles((theme) => ({
  headerWrapper: {
    "& .site-header": {
      backgroundColor: colors.white,
      boxShadow: "none",
      "& .top-header": {
        backgroundColor: colors.primary,
        textAlign: "center",

        "& .top-bar-content": {
          "& p": {
            color: colors.white,
            fontSize: "12px",
            position: "relative",
            padding: "0 20px",
            display: "inline-block",
            "& a": {
              color: colors.white,
              textTransform: "uppercase",
              marginLeft: "5px",
              textDecoration: "underline",
            },
            "& span": {
              display: "inline-block",
              height: "17px",
              width: "17px",
              borderRadius: "50%",
              border: "1px solid #fff",
              marginLeft: "10px",
              cursor: "pointer",
              position: "absolute",
              top: "-1px",
              right: "-5px",
            },
          },
        },
      },
      "& .bottom-header": {
        "& .header-wrapper": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& .logo-wrapper": {
            maxWidth: "180px",
            flex: "0 0 180px",
          },
          "& .nav-wrapper": {
            flex: "1",

            "& .top-right-bar": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& .user-name": {
                display: "flex",
                justifyContent: "flex-start",
                width: "200px",
                padding: "0 57px 0 17px",
                color: colors.primary,
              },
              "& .right": {
                position: "relative",
                width: "200px",
                height: "100%",
                top: 0,
                right: "10px",
                zIndex: "1",
              },

              "& .top-nav-bar": {
                marginLeft: "200px",
              },
              "& .cart-country-wrap": {
                position: "relative",
                width: "200px",
                height: "100%",
                top: "0",
                left: "170px",
                zIndex: "2",

                "& li": {
                  "&.cart-link": {
                    fontSize: "15px",
                    color: colors.textColor,
                    marginLeft: "50px",
                    "& a": {
                      border: "1px solid #cccccc",
                      padding: "8px 13px",
                      borderRadius: "4px",
                      color: colors.textColor,
                    },
                    "& span": {
                      color: colors.primary,
                      margin: "0 5px",
                      fontWeight: "700",
                    },
                  },
                  "&.dropdown-wrap": {
                    "& .MuiSelect-select": {
                      height: "36px",
                      lineHeight: "36px",
                      border: "1px solid #cccccc",
                      borderRadius: "4px",
                      minWidth: "67px",
                      maxWidth: "67px",
                      "&:after": {
                        position: "absolute",
                        right: "8px",
                        top: "12px",
                        content: " '' ",
                        width: "15px",
                        height: "15px",
                        backgroundImage: "url(" + flagImage + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "10px",
                      },
                    },
                    "& .MuiInput-underline": {
                      "&:after, &:before": {
                        opacity: "0",
                      },
                    },
                    "& .MuiSelect-icon": {
                      display: "none",
                    },
                  },
                  "&.hamburger": {
                    display: "none",
                  },
                },
              },
            },
            "& ul": {
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "10px",
              alignItems: "center",
              "& li": {
                width: "auto",
                padding: "0",
                "& + li": {
                  marginLeft: "17px",
                },
              },
              "&.main-nav": {
                "& li": {
                  "& + li": {
                    marginLeft: "31px",
                  },
                  "& a": {
                    color: colors.textColor,
                  },
                },
              },
              "&.top-nav-bar": {
                "& li": {
                  position: "relative",
                  "& +li": {
                    paddingLeft: "15px",
                    "&:before": {
                      position: "absolute",
                      left: "0",
                      top: "0",
                      content: " '' ",
                      borderLeft: "1px solid #c6c6c6",
                      height: "15px",
                    },
                  },
                  "& a": {
                    color: colors.primary,
                    fontSize: "14px",
                  },
                },
              },
            },
          },
        },
      },
      "& .header-search-wrapper": {
        position: "relative",
        zIndex: "2",
        backgroundColor: colors.lightTextColor,
        padding: "10px 0",
        "& .header-search-outer": {
          display: "flex",
        },
        "& .advance-search-wrapper": {
          flex: "0 0 135px",
          maxWidth: "135px",
          alignSelf: "center",
          textAlign: "right",
          "& a": {
            color: colors.grayText,
            textDecoration: "underline",
          },
        },
        "& .header-search-inner": {
          display: "flex",
          flex: "1",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
          "& .searchicon": {
            height: "10px",
            marginTop: "15px",
          },
          "& .dropdown-wrapper": {
            maxWidth: "192px",
            flex: " 0 0 192px",
            "& label": {
              color: colors.textColor + "!important",
              fontWeight: 300,
              position: "absolute !important",
              left: "15px",
              top: "50%",
              fontSize: "16px !important",
              transform: "translateY(-50%) !important",
              margin: "0",
              "&.MuiFormLabel-filled": {
                display: "none",
              },
            },
          },
          "& .btn": {
            maxWidth: "129px",
            flex: "0 0 129px",
            height: "40px",
            lineHeight: "40px",
            borderRadius: "4px",
            textTransform: "none",
            fontSize: "16px",
            marginLeft: "10px",
            "& em": {
              marginRight: "5px",
              borderRadius: " 4px 0 0 4px",
              position: "relative",
              top: "-2px",
            },
          },
          "& .text-wrapper": {
            flex: "1",
            position: "relative",
            padding: "0 0 0 0",
            "& .globalsearch": {
              width: "100%",
            },
            "& .product-listing": {
              position: "absolute",
              left: "0",
              right: "0",
              background: colors.white,
              zIndex: "9",
              borderRadius: "4px",
              padding: "15px",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
              "& .no-product": {
                color: colors.textColor,
                fontWeight: "500",
                padding: "5px",
              },
              "& .loading": {
                color: colors.textColor,
                fontWeight: "500",
                padding: "5px",
              },
              "& .related-product-list": {
                "& li": {
                  padding: "10px 5px",
                  cursor: "pointer",
                  "& .inner-block": {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    "& .left-col": {
                      paddingRight: "10px",
                      maxWidth: "80%",
                      flex: "0 0 80%",
                    },
                    "& .right-col": {
                      maxWidth: "20%",
                      flex: "0 0 20%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                    },
                    "& .title": {
                      fontSize: "16px",
                      color: colors.textColor,
                      fontWeight: "500",
                    },
                    "& p": {
                      color: colors.lightTextColor,
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    },
                    "& .price": {
                      fontSize: "14px",
                      color: colors.textColor,
                      display: "block",
                      textAlign: "right",
                    },
                    " & a": {
                      color: colors.primary,
                    },
                  },
                },
              },
            },

            "& .MuiInputBase-input": {
              backgroundColor: colors.white,
              height: "40px",
              lineHeight: "40px",
              borderRadius: "4px",
            },
          },
        },
      },
    },
  },
  dropdownStyle: {
    "& .MuiPopover-paper": {
      minWidth: "100px !important",
      "& .MuiMenuItem-root": {
        backgroundColor: "transparent !important",
        textAlign: "center",
        "& img": {
          width: "20px",
        },
        "& .MuiTouchRipple-child": {
          backgroundColor: colors.white,
        },
      },
    },
  },
}));

export { headerStyle };
