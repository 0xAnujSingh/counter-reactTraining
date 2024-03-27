// import React, { useState } from 'react'

// const Counter = () => {
//     const[name, setCount]=useState(parseInt(props.inVal))
//   return (
//     <div>Counter Anuj {name} 
//     <button style={bstyle} onClick={()=>incrCount()}>{count}</button>
//     </div>
//   )
// }
//  export default Counter

import React, { useState } from 'react'

const Counter = (props) => {

  const bstyle = {
    backgroundColor: 'green',
    fontSize: '25px',
    padding: '15px',
    color: 'red',
    width: '100px'
  }

  return (
    <div>
      <h5>this is  the button with the increment value {props.incr}</h5>
      <button style={bstyle} onClick={() => props.in1(props.incr)}>{props.incr}</button>

    </div>
  )
}

export default Counter;

