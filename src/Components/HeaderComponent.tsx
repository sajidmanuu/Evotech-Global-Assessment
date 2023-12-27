import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import '../Styles/header.css'

const HeaderComponent: React.FC = () => {


    const headerIcons = [

        {
            icon: '/assets/images/Search.png',
            alt: 'search_icon'
        },
        {
            icon: '/assets/images/Compiling.png',
            alt: 'compiling_icon'
        },
        {
            icon: '/assets/images/Equalizer.png',
            alt: 'equalizer_icon'
        },
        {
            icon: '/assets/images/Cart.png',
            alt: 'cart_icon'
        },
        {
            icon: '/assets/images/Layout 4 blocks.png',
            alt: 'layout_icon'
        }

    ]


    const userName = 'Mohd Shajid Khan';

    const firstCharacter = userName.charAt(0);


    return (
        <>
            <Row className='header-main'>
                <Col xs={24}>
                    <Row>
                        <Col xs={9} md={9}  lg={12} xl={15}>

                        </Col>
                        <Col xs={15} md={15}  lg={12} xl={9}>
                            <Row className='d-flex'>
                                {headerIcons.map((headerIcon, index) => (
                                    <Col key={index} xs={2} className='d-flex-center'>
                                        <img src={headerIcon.icon} alt={headerIcon.alt} />
                                    </Col>
                                ))}
                                <Col xs={6} className='d-flex-center'>
                                    <Typography className='username-text'>{userName}</Typography>
                                </Col>
                                <Col xs={2} className='d-flex-center'>
                                    <Button type="primary" className='username-icon'>{firstCharacter}</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    <Row>
                        <Col xs={8} md={8} lg={7} xl={6}>
                            <Row>
                                <Col xs={12} className='d-flex-center'>
                                    <Typography>Dashboard</Typography>
                                </Col>
                                <Col xs={12}>
                                    <Button className='button-style add-new-button'>Add New</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1} md={1} lg={6} xl={9}>

                        </Col>
                        <Col xs={15} md={15} lg={11} xl={9}>
                            <Row className='d-flex'>
                                <Col xs={2}>
                                    <Button className='button-style'>Today</Button>
                                </Col>
                                <Col xs={2}>
                                    <Button className='button-style'>Month</Button>
                                </Col>
                                <Col xs={2}>
                                    <Button className='button-style'>Year</Button>
                                </Col>
                                <Col xs={2}>
                                    <Button className='button-style'>Actions</Button>
                                </Col>
                                <Col xs={2}>
                                    <img src='/assets/images/File Plus icon.png' />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default HeaderComponent