import { Input, Button, PageHeader } from "antd";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";
import TitleBar from "./components/TitleBar";
import { VscSettings } from "react-icons/vsc";
import { getAllRecipes } from "../../infrastructure/recipes";
import { logError } from "../../common/Utils";
import { Spin } from "antd";
import Chef from "../common/Assets/Images/Chef.svg";

const Dashboard = () => {
  const [recipes, setrecipes] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const ar = await getAllRecipes();
    logError("recipes", ar);
    setrecipes(ar);
    setloader(false);
  };
  if (loader) {
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  } else {
    return (
      <>
        <div id="main">
          <img
            className="wrap_image"
            alt="cook"
            style={{
              position: "fixed",
              right: "0",
              width: "180px",
              top: "30%",
              zIndex: "1000",
            }}
            src={Chef}
          ></img>
          <PageHeader
            className="page-header"
            ghost={false}
            title={
              <Input
                className="search-bar"
                size="large"
                placeholder="Enter your search request..."
                prefix={<SearchOutlined />}
              />
            }
            extra={[
              <VscSettings size={28} />,
              <Button key="1" className="primary-btn" type="primary">
                Go to Premium
              </Button>,
            ]}
          >
            {" "}
          </PageHeader>
          <TitleBar />
          <div className="content">
            {recipes?.items?.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
