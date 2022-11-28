import React from 'react'
import { useSelector } from 'react-redux';
import { selectCount } from './features/counter/counterSlice';

export const ComponentC = () => {
  const count = useSelector(selectCount);
  return (
    <div>
      {count.toString()}
    </div>
  )
}
