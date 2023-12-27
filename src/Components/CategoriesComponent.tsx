import { Col, Row, Select, Typography } from 'antd'
import React from 'react'

const CategoriesComponent = () => {
    return (
        <>
            <Row style={{ backgroundColor: "#ffffff", borderRadius: "12px", height: "23.3rem" }}>
                <Col xs={24}>
                    <Row className='d-flex categories-div'>
                        <Col xs={24} style={{ marginBottom: "7%" }}>
                            <Row className='d-flex'>
                                <Col xs={6} md={9}>
                                    <Typography className='font-white'>Categories</Typography>
                                </Col>
                                <Col xs={6} md={9}>
                                    <Select
                                        defaultValue="export"
                                        className='select-comp'
                                        options={[
                                            { value: 'export', label: 'Export' },
                                            { value: 'lucy', label: 'Lucy' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <img src='/assets/images/Vector 6.png' alt='vector-img' style={{ width: '100%' }} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>

                </Col>
            </Row>
        </>
    )
}
export default CategoriesComponent