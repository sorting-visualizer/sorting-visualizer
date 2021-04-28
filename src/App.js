import Visualize from './component/visualize';
import React, { useState} from 'react'
import './App.css'
import Sidebar from './component/sidebar';


function App() {
  const [size,setSize] = useState(50);
  const [arr,setArr] = useState([]);
  const [col,setCol] = useState([]);

  return (
    <>
      <div className="row">
      <Sidebar size={size} arr={arr} setSize={setSize} setArr={setArr} setColor={setCol}/>
      <Visualize size={size} arr={arr} col={col} />
      </div>   
    </>
  );
}

export default App;
