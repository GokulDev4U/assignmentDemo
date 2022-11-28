import React from 'react'
import { ComponentC } from './ComponentC'

import { ComponentB } from './features/counter/ComponentB'


const ComponentA = () => {
  return (
    <div>
        <ComponentB />
        {/* <Counter /> */}
        <ComponentC />
    </div>
  )
}

export default ComponentA