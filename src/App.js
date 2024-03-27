// import logo from './logo.svg';
// import './App.css';
// import Bello from './Bello';
// import Hello from './Hello';
// import Counter from './counter/Counter';
// import { useState } from 'react';
// import Employees from './counter/Employees';

// function App(){
//     const [count, setCount]=useState(0)
//     const incrFunction=(a)=>{
//         setCount(count+parseInt(a))
//     }
//   return (
//     <div>
//         the common count is {count}

//         <Counter name='first' incr='1' incrfunction={incrFunction}/>
//         <Counter name='second' incr='2' incrfunction={incrFunction}/>
//         <Counter name='third' incr='3' incrfunction={incrFunction}/>
//         <Counter name='fourth' incr='4' incrfunction={incrFunction}/>
//         <Employees/>
//     </div>
//   )
// }






// // function App(){
// //   return(
// //     <div>
// //     <Hello/>
// //     <Bello/>
// //     </div>
// //   )
// // }

// // function App() {
// //   return (
// //     <div className="App">
// //       {/* <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header> */}
// //       <h1> Hello Anuj</h1>
// //     </div>
// //   );
// // }

// export default App;


import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import { useState } from 'react';
import Employees from './counter/Employees';

function App() {
    const [count, setCount] = useState(0)
    const incrFunction = (a) => {
        setCount(count + parseInt(a))
    }
    return (
        <div>
            the common count is {count}
            <Counter name="first" incr="1" in1={incrFunction} />
            <Counter name="second" incr="2" in1={incrFunction} />
            <Counter name="third" incr="3" in1={incrFunction} />
            <Counter name="fourth" incr="4" in1={incrFunction} />

            <Employees />

        </div>


    );
}

export default App;


