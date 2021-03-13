import React from 'react';
import { Menu, Button, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import './index.scss';
import { createFFmpeg, fetchFile} from '@ffmpeg/ffmpeg'

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
                    <Upload customRequest={this.processPic}>
                        <Button  type="dashed" icon={<UploadOutlined/>} > Click to Upload </Button>
                    </Upload>
                </div>
            </div>
        )
    }

    async clickUploadButton () {
        const ffmpeg = createFFmpeg({log: true})
        await ffmpeg.load()
    }

    processPic = async (options: any) => {
        const { onSuccess, onError, filename, onProgress, data} = options;
        const ffmpeg = createFFmpeg({log: true})
        await ffmpeg.load()
        ffmpeg.FS('writeFile', filename, data)
        await ffmpeg.run('-i', filename, 'output.png')
        const outputData = ffmpeg.FS('readFile', 'output.png')
    }
}



// export default Page2;
