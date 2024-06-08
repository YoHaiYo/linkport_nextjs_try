// "use client"
// pages/index.js
// import React from 'react';
// import useStore from '@/store/store';

export default function ServerCP(props) {
  // const { count, increment } = useStore();

  return (
    <div className='bg-orange-200 p-5'>
      <b>Server</b>
      <h1>Count : {props.countNum}</h1>
      {/* <h1>Count: {count}</h1> */}
      {/* <button onClick={increment}>Click !</button> */}
    </div>
  );
}
