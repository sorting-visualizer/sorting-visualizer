import Visualize from './component/visualize';
import React, { useState} from 'react'
import './App.css'
import Sidebar from './component/sidebar';


function App() {
  const [size,setSize] = useState(50);
  const [arr,setArr] = useState([]);
  const [col,setCol] = useState([]);
  const [algo,setAlgo] = useState(0);

  return (
    <>
      <div className="row">
      <Sidebar size={size} arr={arr} algo={algo} setSize={setSize} setArr={setArr} setColor={setCol} setAlgo={setAlgo} />
      <Visualize size={size} arr={arr} col={col} />
      </div>   
    </>
  );
}

export default App;
