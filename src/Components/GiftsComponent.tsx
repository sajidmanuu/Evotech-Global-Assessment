import { Col, Row, Typography } from 'antd'
import React from 'react'

const GiftsComponent: React.FC = () => {



    const tabsContent2 = [

        {
            icon: '/assets/images/ecm007.png',
            alt: 'gift_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/teh008.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/teh004.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/abs025.png',
            alt: 'flower_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/ecm002.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/gen002.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        }
    ]


    return (
        <>
            <Row className='d-flex'>
                {tabsContent2.map((tabContent, index) => (
                    <Col key={index} xs={8} md={8} lg={4} xl={12} className='d-flex-center' style={{ marginBottom: '7%' }}>
                        <Row className='d-flex-center tab-item-2'>
                            <Col xs={24} className='d-flex-container'>
                                <img src={tabContent.icon} alt={tabContent.alt} />
                            </Col>
                            <Col xs={24}>
                                <Typography className='tab-text'>{tabContent.text}</Typography>
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default GiftsComponent