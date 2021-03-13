import React from 'react';
import { Menu, Button, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import './index.scss';

export default class ToolsPage extends React.Component {
    state = {}
    render(){
        return (
            <div className='container'>
                <div className='menu'>
                    <Menu defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            图片压缩
                        </Menu.Item>
                    </Menu>
                    {/* <Menu>
                        <Menu.Item key='2'>
                            Option 2
                        </Menu.Item>
                    </Menu> */}
                </div>
                <div className='line'></div>
                <div className='content'>
                    <Upload >
                        <Button  type="dashed" icon={<UploadOutlined/>} > Click to Upload </Button>
                    </Upload>
                </div>
            </div>
        )
    }
}



// export default Page2;
