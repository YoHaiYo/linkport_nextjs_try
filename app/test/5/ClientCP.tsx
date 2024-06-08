"use client"
// pages/index.js
import React from 'react';
import { useStore } from '@/store/store';

export default function ClientCP() {
  const { count, increment } = useStore();

  return (
    <div className='bg-blue-200 p-5'>
      <b>Client</b>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Click !</button>
    </div>
  );
}
