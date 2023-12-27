import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Col, Menu, Row, Typography } from 'antd';
import '../Styles/Dashboard.css';
import ButtonComponent from './ButtonComponent';

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    style?: React.CSSProperties,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        style,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Applications', 'sub2', <img src='/assets/images/Layout 4 blocks.png' alt='' />, [
        getItem('-  Users', 'sub3', null, [getItem('user 1', '1'), getItem('user 2', '2')]),
        getItem('-  Contacts', 'sub4', null, [getItem('contacts 1', '1'), getItem('contacts 2', '2')]),
        getItem('-  Chat', 'sub5', null, [getItem('chat 1', '1'), getItem('chat 2', '2')]),
        getItem('-  Pages', 'sub6', null, [getItem('pages 1', '1'), getItem('pages 2', '2')]),
    ]),
];


const Sidebar: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Row className='dashboard-main'>
                <Col xs={24}>
                    <Row className='d-flex dashboard-header'>
                        <Col xs={20} md={19} lg={19} xl={20} className='d-flex-container-center' style={{ padding: "13px" }}>
                            <Typography className='dashboard-text'>DASHBOARD</Typography>
                        </Col>
                        <Col xs={4} md={5} lg={5} xl={4} className='d-flex-container-center'>
                            <Button type="primary" className='dashboard-collapse-button d-flex-container-center'>
                                <img src='/assets/images/Arrow-double-left-active.png' alt='collapse-arrow-image' />
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} style={{ height: "1.5rem" }}>
                </Col>
                <Col xs={24}>
                    <Row className='d-flex dashboard-header'>
                        <Col xs={4} className='d-flex-container-center'>
                            <img src='/assets/images/Layers.png' alt='layers-image' />
                        </Col>
                        <Col xs={20} className='d-flex-container-center'>
                            <Typography className='dashboard-sub-text'>Dashboard</Typography>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} className='d-flex-container-center custom-text-div'>
                    <Typography className='custom-text '>CUSTOM</Typography>
                </Col>
                <Col xs={24}>
                    <Menu
                        className='dashboard-main dashboard-menu-text'
                        style={{ height: "230vh", paddingLeft: '0' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={collapsed}
                        items={items}
                    >
                        {items.map((item: any) => (
                            <Menu.Item key="sub2" style={{ fontSize: '10px', paddingLeft: "10px" }}>
                                <img src='/assets/images/Layout 4 blocks.png' alt='' />
                                <span>Applications</span>
                            </Menu.Item>
                        ))}

                    </Menu>
                </Col>
            </Row>
        </>
    )
}

export default Sidebar