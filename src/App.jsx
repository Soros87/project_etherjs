import "./App.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import ethersLogo from "./assets/etherslogo.svg";
import { Breadcrumb, Input, Space } from "antd";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Layout className="full-screen-layout">
      <Header>
        <img
          src={ethersLogo}
          className="logo-ethers"
          alt="ethers logo"
          style={{
            width: "40px", // Set width to your preferred size
            marginRight: "auto", // Push the image to the left
          }}
        />
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            {toggleMenu ? (
              <AiOutlineClose
                style={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                }}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <IoMdMenu
                style={{
                  width: "30px", // Set width to 30px
                  height: "30px", // Set height to 30px
                  color: "white", // Set color to white
                  marginLeft: "auto",
                }}
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Header>
      {toggleMenu && <div className="sub_verticalbar"></div>}
      {toggleMenu ? null : (
        <Layout>
          <Sider width="15%">
            <div className="sidebar_header">
              <img src={ethersLogo} className="logo-ethers" alt="ethers logo" />
              <span>ethers</span>
              <span>6.9.1</span>
              <Space.Compact>
                <Input
                  defaultValue=""
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    borderRadius: "20px",
                    border: "none", // Optional: Remove default border
                    padding: "8px 12px", // Optional: Adjust padding
                    width: "100%",
                  }}
                />
              </Space.Compact>
            </div>
            <div className="sub_sidebar"></div>
            <div className="sidebar_bottom">
              <span>Single Page</span>
            </div>
          </Sider>
          <Content style={{ padding: "0 48px" }}>
            <div className="navbar">
              <Breadcrumb style={{ margin: "16px 0" }} separator=">">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Content>
        </Layout>
      )}
    </Layout>
  );
}

export default App;
