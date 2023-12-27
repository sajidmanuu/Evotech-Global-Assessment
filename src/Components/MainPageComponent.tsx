import { Col, Row } from 'antd'
import React from 'react'
import HeaderComponent from './HeaderComponent'
import MainContentComponent from './MainContentComponent'

const MainPageComponent: React.FC = () => {
    return (
        <>
            <Row style={{ width: '100%' }}>
                <Col xs={24}>
                    <HeaderComponent />
                </Col>
                <Col xs={24}>
                    <MainContentComponent />
                </Col>
            </Row>
        </>
    )
}

export default MainPageComponent