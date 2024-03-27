// import React, { useState } from 'react'
// import Employee from './Employee'

// const Employees = () => {
//     const [emps, setEmps]= useState([
//         {name:'Anuj', subject:'python'},
//         {name:'nitin', subject:'c'},
//         {name:'Hi', subject:'c++'},
//         {name:'Hello', subject:'c--'}
//     ])
//     const empsData=emps.map((emp)=>{
//         return <Employee emp={emp}/>
//     })
//   return (
//     <div>{empsData}</div>
//   )
// }
// export default Employees

import React, { useState } from 'react'

import Employee from './Employee'




const Employees = () => {

    const [emps, setEmps] = useState([

        { name: 'nikhil', subject: 'java' },

        { name: 'nitin', subject: 'c++' },

        { name: 'vishal', subject: 'android' },

        { name: 'jatin', subject: 'php' },

    ])

    const empsData = emps.map((emp) => {

        return <Employee emp={emp} />

    })

    return (

        <div>

            {empsData}

        </div>



    )

}



export default Employees