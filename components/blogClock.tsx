import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Typography } from 'antd';
import BlogContainer from './blogContainer';

const { Paragraph } = Typography;

// 时钟组件
const BlogClock = () => {
  const [date, setDate] = useState(new Date());
  const [dateValue, setDateValue] = useState('');
  const [dateValue1, setDateValue1] = useState('');
  const [dateValue2, setDateValue2] = useState<any>();

  useEffect(() => {
    function tick() {
      setDate(new Date());
    }
    const timerID = setInterval(tick, 1000);

    return function clearTick() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    setDateValue(moment(date).format('YYYY-MM-DD HH:mm:ss'));
    setDateValue1(moment(date).format('YYYY-MM-DD-HH-mm-ss'));
    setDateValue2(moment(date).valueOf());
  }, [date]);

  return (
    <BlogContainer>
      <div className="py-2 text-center text-sm">
        <div className="flex justify-between">
          <Paragraph copyable>{dateValue}</Paragraph>
          <Paragraph copyable>{'_' + dateValue2 + '.md'}</Paragraph>
          <Paragraph copyable>{dateValue1}</Paragraph>
        </div>
      </div>
    </BlogContainer>
  );
};

export default BlogClock;
