import React from 'react'

const stage = {
  a: 0,
  b: 1
}

export default function test() {
  return (
    <div>test
      {stage[a]}
    </div>
  )
}
