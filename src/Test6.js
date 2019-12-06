import React, { useState } from 'react';
import InputNumber from './InputNumber';

function Test6() {
  const [value, setValue] = useState('0')
  return (
    <div>
      <div>受控InputNumber组件：<InputNumber value={value} onChange={e => { setValue(parseInt(e.target.value)) }} /></div>
      <div>非受控InputNumber组件：<InputNumber defaultValue={value} onChange={e => { }} /></div>
    </div>
  )
}
export default Test6;
