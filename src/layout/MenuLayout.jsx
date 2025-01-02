import {
  CloudDownloadOutlined,
  EditOutlined,
  FundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getItem } from "./getItem";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

//
export const MenuLayout = () => {
  const navigate = useNavigate();

  const items = [
    getItem("Temas", "temas", <FundOutlined />),
    getItem("Examen Final", "examenFinal", <EditOutlined />),
    getItem("Descargas", "descargas", <CloudDownloadOutlined />),
    getItem("Mis Datos", "misDatos", <UserOutlined />),
  ];

  const menuClick = ({ key }) => navigate(key);

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
