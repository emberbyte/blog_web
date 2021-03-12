import React, { useState } from 'react';
import { Menu } from 'antd';
import { IdcardOutlined, ProfileOutlined, ToolOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { MenuInfo } from '../../node_modules/rc-menu/lib/interface';

const Nav: React.FC = () => {
  const [current, changeCurrent] = useState<string>('articles');
  const history = useHistory();

  const handleClick = (e: MenuInfo) => {
    const key = String(e.key);
    history.push(key);
    changeCurrent(key);
  };

  return (
    <Menu onClick={(e) => handleClick(e)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="articles" icon={<ProfileOutlined />}>
        Articles
      </Menu.Item>
      <Menu.Item key="tools" icon={<ToolOutlined />}>
        Tools
      </Menu.Item>
      <Menu.Item key="about" icon={<IdcardOutlined />}>
        About me
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
