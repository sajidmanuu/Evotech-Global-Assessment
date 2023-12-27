import { Button, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'

const NewArrivalsComponent: React.FC = () => {

    const [activeButton, setActiveButton] = useState('Day');


    const newArrivalItems = [

        {
            icon: '/assets/images/184-plurk.png',
            alt: 'ftp_icon',
            text: 'Sant Outstanding',
            description: 'FTP: bprow@bnc.cc',
            amount: '$2,000,000',
            paidStatus: 'paid',
            status: 'Approved',
            backgroundColor: '#EEE5FF',
            color: '#8950FC'
        },
        {
            icon: '/assets/images/Group.png',
            alt: 'telegram_icon',
            text: 'Telegram Application',
            description: 'FTP: bprow@bnc.cc',
            amount: '$4,600,000',
            paidStatus: 'paid',
            status: 'In progress',
            backgroundColor: '#FFF4DE',
            color: '#FFA800'
        },
        {
            icon: '/assets/images/194-puzzle.png',
            alt: 'cisco_icon',
            text: 'Cisco Management',
            description: 'FTP: bprow@bnc.cc',
            amount: '$560,000',
            paidStatus: 'paid',
            status: 'Success',
            backgroundColor: '#C9F7F5',
            color: '#1BC5BD'
        },
        {
            icon: '/assets/images/182-bebo.png',
            alt: 'hrm_icon',
            text: 'HR Management',
            description: 'FTP: bprow@bnc.cc',
            amount: '$57,000',
            paidStatus: 'paid',
            status: 'Rejected',
            backgroundColor: '#FFE2E5',
            color: '#F64E60'
        },
        {
            icon: '/assets/images/Group (1).png',
            alt: 'ktr_icon',
            text: 'KTR Mobile Application',
            description: 'FTP: bprow@bnc.cc',
            amount: '$45,200,000',
            paidStatus: 'paid',
            status: 'In Progress',
            backgroundColor: '#FFF4DE',
            color: '#FFA800'
        },
    ]

    return (
        <>
            <Row style={{ padding: '15px', backgroundColor: '#ffffff', borderRadius: '12px' }}>
                <Col xs={24} style={{ marginBottom: '2%' }}>
                    <Typography className='new-arrivals-text'>New Arrivals</Typography>
                </Col>
                <Col xs={24} style={{ marginBottom: '3%' }}>
                    <Row className='d-flex'>
                        <Col xs={8} md={9} lg={8} xl={8}>
                            <Typography className='new-arrivals-sub-text'>More than 400+ new members</Typography>
                        </Col>
                        <Col xs={11} md={15} lg={11} xl={11}>
                            <Row className='d-flex'>
                                <Col xs={4}>
                                    <Button
                                        className={`new-arrival-button ${activeButton === 'Month' ? 'activeButton' : ''}`}
                                        onClick={() => setActiveButton('Month')}
                                    >Month</Button>
                                </Col>
                                <Col xs={4}>
                                    <Button
                                        className={`new-arrival-button ${activeButton === 'Week' ? 'activeButton' : ''}`}
                                        onClick={() => setActiveButton('Week')}
                                    >Week</Button>
                                </Col>
                                <Col xs={4}>
                                    <Button
                                        className={`new-arrival-button ${activeButton === 'Day' ? 'activeButton' : ''}`}
                                        onClick={() => setActiveButton('Day')}
                                    >Day</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    {newArrivalItems.map((newArrivalItem, index) => (
                        <Row justify={'space-between'}>
                            <Col xs={10} md={10} lg={10} xl={10}>
                                <Row style={{ marginBottom: '5%' }} justify={'start'}>
                                    <Col xs={6} className='d-flex'>
                                        <div className='d-flex-center new-arrival-icon-div'> <img src={newArrivalItem.icon} alt={newArrivalItem.alt} style={{ height: '75%', width: '75%' }} /></div>
                                    </Col>
                                    <Col xs={18}>
                                        <Row>
                                            <Col xs={24} className='d-flex-start'>
                                                <Typography className='sales-progress-text-2'>{newArrivalItem.text}</Typography>
                                            </Col>
                                            <Col xs={24} className='d-flex-start'>
                                                <Typography className='sales-progress-description'>{newArrivalItem.description}</Typography>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} >
                                <Row>
                                    <Col xs={24}>
                                        <Typography className='amount-text'>{newArrivalItem.amount}</Typography>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography className='paid-text'>{newArrivalItem.paidStatus}</Typography>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={5} md={5} lg={5} xl={4} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button style={{ backgroundColor: newArrivalItem.backgroundColor, color: newArrivalItem.color, border: 'none' }}>{newArrivalItem.status}</Button>
                            </Col>
                            <Col xs={5} md={5} lg={5} xl={6}>
                                <Row className='d-flex'>
                                    <Col xs={7}>
                                        <img src='/assets/images/Button Settings.png' alt='settings_icon' />
                                    </Col>
                                    <Col xs={7}>
                                        <img src='/assets/images/Button Edit.png' alt='settings_icon' />
                                    </Col>
                                    <Col xs={7}>
                                        <img src='/assets/images/Button Trash.png' alt='settings_icon' />
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

export default NewArrivalsComponent