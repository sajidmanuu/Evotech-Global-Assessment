import { Col, Row } from 'antd'
import React from 'react'
import Sidebar from './Sidebar'
import MainPageComponent from './MainPageComponent'

const MainComponent : React.FC = () => {
    return (
        <>
            <Row style={{ height : "90vh ", width : "100vw"}}>
                <Col xs={5} md={5} lg={5} xl={4}>
                    <Sidebar />
                </Col>
                <Col xs={19} md={19} lg={19} xl={20}>
                    <MainPageComponent />
                </Col>
            </Row>
        </>
    )
}

export default MainComponent
