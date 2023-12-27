import { Col, Row, Typography } from 'antd'
import React from 'react'

const SalesProgressComponent : React.FC = () => {


    const salesProgressItems = [

        {
            icon: '/assets/images/Icon.png',
            alt: 'gift_icon',
            text: 'Briviba SaaS',
            description: 'PHP, SQLite, Artisan CLIмм'
        },
        {
            icon: '/assets/images/Icon (1).png',
            alt: 'layout_icon',
            text: 'Briviba SaaS',
            description: 'PHP, SQLite, Artisan CLIмм'
        },
        {
            icon: '/assets/images/Icon (2).png',
            alt: 'layout_icon',
            text: 'Briviba SaaS',
            description: 'PHP, SQLite, Artisan CLIмм'
        },
        {
            icon: '/assets/images/Icon (3).png',
            alt: 'flower_icon',
            text: 'Briviba SaaS',
            description: 'PHP, SQLite, Artisan CLIмм'
        },
        {
            icon: '/assets/images/Icon (4).png',
            alt: 'layout_icon',
            text: 'Briviba SaaS',
            description: 'PHP, SQLite, Artisan CLIмм'
        },
        {
            icon: '/assets/images/gen002.png',
            alt: 'layout_icon',
            text: 'Briviba SaaS',
            description: 'PHP, SQLite, Artisan CLIмм'
        }
    ]

    return (
        <>
            <Row style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '12px' }}>
                <Col xs={24} style={{ marginBottom : '7%'}}>
                    <Row className='d-flex'>
                        <Col xs={12}>
                            <Typography className='sales-progress-text'>Sales Progress</Typography>
                        </Col>
                        <Col xs={6}>
                            <img src='/assets/images/Dots.png' alt='Dots image' />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    {salesProgressItems.map((salesProgressItem, index) => (
                        <Row style={{ marginBottom : '5%'}}>
                            <Col xs={4}>
                                <img src={salesProgressItem.icon} alt={salesProgressItem.alt} />
                            </Col>
                            <Col xs={20}>
                                <Row>
                                    <Col xs={24} className='d-flex-start'>
                                        <Typography className='sales-progress-text-2'>{salesProgressItem.text}</Typography>
                                    </Col>
                                    <Col xs={24} className='d-flex-start'>
                                        <Typography className='sales-progress-description'>{salesProgressItem.description}</Typography>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </>
    )
}

export default SalesProgressComponent