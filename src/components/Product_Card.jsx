import { Button } from "antd";
import "./Product_Card.scss";
import { ReactComponent as Cart } from "../../public/icon-cart.svg";

const Product_Card = (props) => {
  return (
    <div className="division">
      <p
        style={
          props.name == "mobile"
            ? {
                color: "hsl(228, 12%, 48%)",
                letterSpacing: "3px",
              }
            : { color: "hsl(228, 12%, 48%)", letterSpacing: "8px" }
        }
      >
        PERFUME
      </p>
      <p
        style={
          props.name == "mobile"
            ? {
                fontFamily: "Fraunces",
                fontSize: "30px",
                lineHeight: "30px",
                marginTop: "0",
                marginBottom: "25px",
              }
            : {
                fontFamily: "Fraunces",
                fontSize: "45px",
                lineHeight: "45px",
                marginTop: "0",
                marginBottom: "25px",
              }
        }
      >
        Gabrielle Essence Eau De Parfum
      </p>
      <p
        style={
          props.name == "mobile"
            ? {
                fontFamily: "Montserrat",
                fontSize: "14px",
                color: "hsl(228, 12%, 48%)",
                marginTop: "0",
              }
            : {
                fontFamily: "Montserrat",
                fontSize: "18px",
                color: "hsl(228, 12%, 48%)",
                marginTop: "0",
              }
        }
      >
        A floral, solar and voluptuos interpretation composed by Oliver Polge,
        Perfumer-Creator for the House of CHANEL
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontFamily: "Fraunces",
            fontSize: "35px",
            lineHeight: "34px",
            color: "hsl(158, 36%, 37%)",
            margin: "0px 20px 0px 0px",
          }}
        >
          $149.99
        </p>
        <p
          style={{
            textDecorationLine: "line-through",
            color: "hsl(228, 12%, 48%)",
            margin: "0",
          }}
        >
          $169.99
        </p>
      </div>
      <Button
        className="button-container"
        size="large"
        style={
          props.name == "desktop"
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "hsl(158, 36%, 37%)",
                border: "none",
                fontWeight: "500",
                color: "white",
              }
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "hsl(158, 36%, 37%)",
                border: "none",
                fontWeight: "500",
                color: "white",
                height: "60px",
              }
        }
      >
        <Cart style={{ marginRight: "20px" }} />
        Add to Cart
      </Button>
    </div>
  );
};

export default Product_Card;
