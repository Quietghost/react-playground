import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './carosel.css';
import { Row, Col, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

function onChange(a, b, c) {
  console.log(a, b, c);
}

const NextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715'
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  )
}

const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715'
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  )
}


const settings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}


ReactDOM.render(
  <Row justify="center">
        <Col span={16}>
          <Carousel dotPosition="top" afterChange={onChange} touchMove={true} arrows {...settings}> 
            <div id="over"><img src={`${process.env.PUBLIC_URL}/assets/images/1.jpeg`} alt=""></img></div>
            <div id="over"><img src={`${process.env.PUBLIC_URL}/assets/images/2.jpeg`} alt=""></img></div>
          </Carousel>
          </Col>
          <Col span={16}>
            <h3 class="example">Test</h3>
          </Col>
      </Row>,
  document.getElementById('container'),
);
