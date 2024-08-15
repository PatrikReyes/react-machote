import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { getItem } from "./getItem";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

//
export const MenuLayout = () => {
  const navigate = useNavigate();
 
  const items = [
    getItem("Empleados", "empleados", <DesktopOutlined />),
    getItem("Usuarios", "usuarios", <DesktopOutlined />),
  ];

  const menuClick = ({ key }) => {
    navigate(key);
  };
  

  ////
  return (
    <Menu
      theme="light"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      onClick={menuClick}
    />
  );
};
