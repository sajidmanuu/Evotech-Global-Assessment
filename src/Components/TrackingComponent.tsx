import React from 'react';
import '../Styles/MainContent.css';
import { Col, Row, Typography, Steps } from 'antd';


const TrackingComponent: React.FC = () => {
    const trackingItems = [
        {
            title: '8:42',
            description: 'Outlines keep you honest. Indulging in poorly driving and keep structure',
        },
        {
            title: '10:00',
            description: 'AEOL meeting with',
        },
        {
            title: '14:37',
            description: 'Make deposit USD 700 to ESL',
        },
        {
            title: '16:50',
            description: 'Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great',
        },
    ];

    return (
        <>
            <Row style={{ backgroundColor: '#ffffff', borderRadius: '12px' }} className='tracking-component'>
                <Col xs={24}>
                    <Typography className='activities-text'>Recent Activities</Typography>
                </Col>
                <Col xs={24}>
                    <Row className='d-flex'>
                        <Col xs={8}>
                            <Typography className='sales-text'>890,344 Sales</Typography>
                        </Col>
                        <Col xs={6}>
                            <img src='/assets/images/Dots.png' alt='Dots image' />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    <Steps direction='vertical' size='small' current={1} className='custom-steps'>
                        {trackingItems.map((item, index) => (
                            <Steps.Step
                                key={index}
                                title={<div className='step-title'>{item.title}</div>}
                                description={<div className='step-description'>{item.description}</div>}
                            />
                        ))}
                    </Steps>
                </Col>
            </Row>
        </>
    );
};

export default TrackingComponent;
