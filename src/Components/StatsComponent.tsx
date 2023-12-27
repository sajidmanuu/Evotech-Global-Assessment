import React, { useState } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { Column } from '@ant-design/charts';
import ClusteredColumnChart from './ClusteredColumnChart';



const StatsComponent: React.FC = () => {

  const [activeButton, setActiveButton] = useState('Day');

  return (
    <>
      <Row style={{ padding: '15px', backgroundColor: '#ffffff', borderRadius: '12px' }}>
        <Col xs={24} style={{ marginBottom: '2%' }}>
          <Typography className='new-arrivals-text'>Recent Stats</Typography>
        </Col>
        <Col xs={24} style={{ marginBottom: '3%' }}>
          <Row className='d-flex'>
            <Col xs={9} md={9} lg={9} xl={8}>
              <Typography className='new-arrivals-sub-text'>More than 400+ new members</Typography>
            </Col>
            <Col xs={15} md={15} lg={15} xl={11}>
              <Row className='d-flex'>
                <Col xs={5}>
                  <Button
                    className={`new-arrival-button ${activeButton === 'Month' ? 'activeButton' : ''}`}
                    onClick={() => setActiveButton('Month')}
                  >Month</Button>
                </Col>
                <Col xs={5}>
                  <Button
                    className={`new-arrival-button ${activeButton === 'Week' ? 'activeButton' : ''}`}
                    onClick={() => setActiveButton('Week')}
                  >Month</Button>
                </Col>
                <Col xs={5}>
                  <Button
                    className={`new-arrival-button ${activeButton === 'Day' ? 'activeButton' : ''}`}
                    onClick={() => setActiveButton('Day')}
                  >Month</Button>
                </Col>
              </Row>
            </Col>
            <Col xs={24} style={{ marginTop: '3%' }}>
              <ClusteredColumnChart />
            </Col>
          </Row>
        </Col>
        <Col xs={24}></Col>
      </Row>
    </>
  );
};

export default StatsComponent;
