import { Menu } from "antd";

const Header = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">React-Jotai-AntD</Menu.Item>
    </Menu>
  );
};

export default Header;
