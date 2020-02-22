import React, { useState } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const NavBar = () => {
  const [current, setCurrent] = useState("");

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail">
        <div>
          <Icon type="mail" />
          <Link to="/">Content 1</Link>
        </div>
      </Menu.Item>
      <Menu.Item key="app">
        <div>
          <Icon type="appstore" />
          <Link to="/content2">Content 2</Link>
        </div>
      </Menu.Item>
      <Menu.Item key="sdd">
        <div>
          <Icon type="appstore" />
          <Link to="/content3">Content 3</Link>
        </div>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
