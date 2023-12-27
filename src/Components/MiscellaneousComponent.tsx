import { Col, Row, Typography } from 'antd'
import React from 'react'

const MiscellaneousComponent : React.FC = () => {

    const miscelleneousItems = [
        {
            src: "/assets/images/Cart 1.png",
            alt: "equalizer_icon",
        },
        {
            src: "/assets/images/Cart 2.png",
            alt: "adduser__icon",
        },
        {
            src: "/assets/images/Cart 3.png",
            alt: "compiling_icon",
        },
        {
            src: "/assets/images/Cart 4.png",
            alt: "mail_icon",
        }
    ]
    return (
        <>
            <Row style={{ padding: '15px' }}>
                <Col xs={24}>
                    <Row className='d-flex'>
                        {miscelleneousItems.map((miscellaneousItem, index) => (
                            <Col key={index} xs={6} md={6} lg={6} xl={12} className='d-flex-center' style={{ marginBottom: '7%' }}>
                                <Row className='d-flex-center'>
                                    <img src={miscellaneousItem.src} alt={miscellaneousItem.alt} className='cart-image' />
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default MiscellaneousComponent