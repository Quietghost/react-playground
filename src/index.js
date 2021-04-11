import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '480px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  verticalAlign: 'middle',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel afterChange={onChange}>
    <div>
    <h3 style={contentStyle}><div id="over"><img src={`${process.env.PUBLIC_URL}/assets/images/1.jpeg`}></img></div></h3>
    </div>
    <div>
    <h3 style={contentStyle}><img src={`${process.env.PUBLIC_URL}/assets/images/1.jpeg`}></img></h3>
    </div>
    <div>
    <h3 style={contentStyle}><img src={`${process.env.PUBLIC_URL}/assets/images/1.jpeg`}></img></h3>
    </div>
    <div>
    <h3 style={contentStyle}><img src={`${process.env.PUBLIC_URL}/assets/images/1.jpeg`}></img></h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
