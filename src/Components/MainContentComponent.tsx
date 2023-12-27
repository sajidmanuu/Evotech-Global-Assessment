import { Col, Row, Typography, Select, Steps } from 'antd'
import React from 'react'
import '../Styles/MainContent.css'
import TrackingComponent from './TrackingComponent'
import SalesProgressComponent from './SalesProgressComponent'
import NewArrivalsComponent from './NewArrivalsComponent'
import StatsComponent from './StatsComponent'
import MiscellaneousComponent from './MiscellaneousComponent'
import TabsComponent from './TabsComponent'
import CategoriesComponent from './CategoriesComponent'
import GiftsComponent from './GiftsComponent'

const MainContentComponent: React.FC = () => {


    return (
        <>
            <Row className='main-content-div'>
                <Col xs={24}>
                    <Row>
                        <Col xs={24} md={24} lg={24} xl={16}>
                            <Row>
                                <Col xs={24} style={{ marginBottom: '5%' }}>
                                    <TabsComponent />
                                </Col>
                                <Col xs={24} className='mb'>
                                    <Row className='d-flex'>
                                        <Col xs={11}>
                                            <CategoriesComponent />
                                        </Col>
                                        <Col xs={12}>
                                            <TrackingComponent />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={24} md={24} lg={24} xl={8}>
                            <GiftsComponent />
                        </Col>
                    </Row>

                </Col>
                <Col xs={24}>
                    <Row className='d-flex'>
                        <Col xs={24} md={24} lg={24} xl={7} className='mb'>
                            <SalesProgressComponent />
                        </Col>
                        <Col xs={24} md={24} lg={24} xl={16} className='mb'>
                            <NewArrivalsComponent />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    <Row className='d-flex'>
                        <Col xs={24} md={24} lg={24} xl={16} className='mb'>
                            <StatsComponent />
                        </Col>
                        <Col xs={24} md={24} lg={24} xl={7} className='mb'>
                            <MiscellaneousComponent />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default MainContentComponent