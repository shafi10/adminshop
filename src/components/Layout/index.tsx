// import * as React from "react";
// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import { RootState } from "../../store";
// import { Navigate } from "react-router-dom";
// import { ROUTES } from "../../utils/routes";
// import Sidebar from "../ui/layout/sidebar";
// import styles from "./navbar.module.css";

// export interface Props {
//   title?: string;
// }

// const Layout: React.FC<Props> = () => {
//   const isAuthorized = useSelector(
//     (state: RootState) => state.uislice.isAuthorized
//   );
//   if (!isAuthorized) {
//     return <Navigate to={ROUTES.LOGIN} replace={true} />;
//   }
//   return (
//     <div>
//       <div className="">Navbar</div>
//       <div className={styles?.layout}>
//         <Sidebar />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const LayoutDesign: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" title="Admin Panel" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={320} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 1000,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutDesign;
