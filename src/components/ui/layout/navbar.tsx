import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar: React.FC = () => {
  return (
    <Header className="header">
      <div className="logo" title="Admin Panel" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  );
};

export default Navbar;
