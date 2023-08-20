import { useEffect, useState } from "react";
import Product_Card from "./components/Product_Card";
import { Card } from "antd";
import "./App.scss";

const App = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const detectSize = () => {
    setWidthScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen]);
  return (
    <div className="main-container">
      {widthScreen < 700 ? (
        <Card
          className="card-container-mobile"
          hoverable
          cover={
            <img
              className="card-image-container-mobile"
              // style={{
              //   height: "500px",
              //   minWidth: "350px",
              //   borderBottomLeftRadius: "8px",
              //   borderTopRightRadius: "0px",
              // }}
              alt="example"
              src={"./image/image-product-mobile.jpg"}
            />
          }
        >
          <Product_Card name="mobile" />
        </Card>
      ) : (
        <Card
          className="card-container-desktop"
          hoverable
          cover={
            <img
              className="card-image-container"
              style={{
                height: "500px",
                minWidth: "350px",
                borderBottomLeftRadius: "8px",
                borderTopRightRadius: "0px",
              }}
              alt="example"
              src={"./image/image-product-desktop.jpg"}
            />
          }
        >
          <Product_Card name="desktop" />
        </Card>
      )}
    </div>
  );
};
export default App;
