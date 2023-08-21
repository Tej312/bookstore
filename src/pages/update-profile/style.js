import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/images/download.jpeg";
const editStyle = makeStyles((theme) => ({
  editWrapper: {
    // padding: "20px 30px 20px 30px",
    // margin: "10px 25% 10px 25%",
    // border: "10px solid red",
    // backgroundColor: "#D5F5FF",
    // border: "5px solid #006685",
    // borderRadius: "25px",
    "& .container": {
      maxWidth: "700px",
      padding: "0 50px 0 50px",
      margin: "10px 0 0 50%",
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
      padding: "0 0 12px 0",
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
        width: "150px",
        margin: "20px 25px 20px 25px",
      },
    },
    "& .form-row-wrapper": {
      display: "flex",
      justifyContent: "center",
      margin: "0 -15px",
      "& .form-col": {
        padding: "10px 10px 10px 10px",
        margin: "0 20px 0 20px",
        display: "flex",
        justifyContent: "center",
      },
    },
  },
}));

export { editStyle };
