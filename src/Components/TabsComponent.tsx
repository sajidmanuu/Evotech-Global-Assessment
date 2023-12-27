import { Col, Row, Typography } from 'antd'
import React, { useState } from 'react'

const TabsComponent: React.FC = () => {

    const [activeTab, setActiveTab] = useState('Video Tutorials');
    const [activeImage, setActiveImage] = useState('/assets/images/Movie-lane.png');




    const tabsContent = [

        {
            icon: '/assets/images/Library.png',
            alt: 'library_icon',
            text: 'SaaS Application'
        },
        {
            icon: '/assets/images/Layout-4-blocks (1).png',
            alt: 'layout_icon',
            text: 'Main Categories'
        },
        {
            icon: '/assets/images/Movie-lane.png',
            alt: 'video_icon',
            text: 'Video Tutorials'
        },
        {
            icon: '/assets/images/Equalizer (1).png',
            alt: 'equalizer_icon',
            text: 'Sales Statistics'
        },
        {
            icon: '/assets/images/Shield-check.png',
            alt: 'shield_icon',
            text: 'ABC Security'
        }

    ]


    return (
        <>
            <Row className='d-flex'>
                {tabsContent.map((tabContent, index) => (
                    <Col key={index} xs={4} className='d-flex-center'>
                        <Row
                            className={`d-flex-center tab-item ${activeTab === tabContent.text ? 'activeTab' : ''}`}
                        >
                            <Col xs={24} className='d-flex-container'>
                                <img src={tabContent.icon} alt={tabContent.alt}
                                    className={`tab-content-icon ${activeImage === tabContent.icon ? 'activeImage' : ''}`}
                                    onClick={() => setActiveImage(tabContent.icon)} />
                            </Col>
                            <Col xs={24}>
                                <Typography className='tab-text' onClick={() => setActiveTab(tabContent.text)}>{tabContent.text}</Typography>
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default TabsComponent