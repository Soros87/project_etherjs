import "./App.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import ethersLogo from "./assets/etherslogo.svg";
import { Breadcrumb, Input, Space } from "antd";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { items, routeNames } from "./assets/menu";

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [routesArray, setRoutesArray] = useState([]);

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleMenuSelect = ({ keyPath }) => {
    setSelectedKeys(keyPath);
    // Use keyPath as needed. It contains the keys of the selected items.
    const newRoutesArray = keyPath.map((key) => routeNames[key]).reverse();
    console.log(newRoutesArray);
    setRoutesArray(newRoutesArray);
  };

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
      {toggleMenu && (
        <div className="sub_verticalbar">
          {" "}
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
            onSelect={handleMenuSelect}
            selectedKeys={selectedKeys}
          />
        </div>
      )}
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
            <div className="sub_sidebar">
              <div className="title">DOCUMENTATION</div>
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
                onSelect={handleMenuSelect}
                selectedKeys={selectedKeys}
              />
            </div>
            <div className="sidebar_bottom">
              <span>Single Page</span>
            </div>
          </Sider>
          <Content style={{ padding: "0 48px" }}>
            <div className="navbar">
              <Breadcrumb style={{ margin: "16px 0" }} separator=">">
                <Breadcrumb.Item>Documentation</Breadcrumb.Item>
                {routesArray.map((o, index) => {
                  return <Breadcrumb.Item key={index}>{o}</Breadcrumb.Item>;
                })}
              </Breadcrumb>
            </div>
          </Content>
        </Layout>
      )}
    </Layout>
  );
}

export default App;
