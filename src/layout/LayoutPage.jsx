import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { MenuLayout } from "./MenuLayout";
import Logo from "./Logo";
import { User } from "./User";
import { Logout } from "./Logout";
import { Ver } from "./Ver";
import { BookTwoTone } from "@ant-design/icons";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { MobileLayout } from "./MobileLayout";
import { Sesion } from "./Sesion";
const { Content, Sider } = Layout;

//

export const LayoutPage = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {width} = useWindowDimensions();

  if(width < 668) return <MobileLayout children={children}/>

  //
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: "#fff" }}
      >
        <Logo collapsed={collapsed} />
        <User collapsed={collapsed}/>
        <Divider />
        <MenuLayout />
        <Divider />
     
        <Logout collapsed={collapsed} />
      
      </Sider>
      
      <Layout>
        <Content
          style={{
            margin: "10px 10px",
          }}
        >
          {children}
          <Ver />
        </Content>
        <Sesion />
      </Layout>

    </Layout>
  );
};
