import React from 'react'
import generate from '../gen/gen_arr'
import Button from '@material-ui/core/Button';
import genCols from '../gen/gen_cols';
import BubbleSort from '../algo/bubble';
import RadioButtonsGroup from './radio';
// import mergeSort from '../algo/mergesort';

export default function Sidebar({ size, arr, setSize, setArr, setColor,algo,setAlgo}) {
    const ref = React.createRef();

    return (
        <div className="sideBar">
            <center>
                <div class="sideItemHeading">
                    <label>Sorting</label>
                </div>
                <div class="sideItemHeading">
                    <label>Visualizer</label>
                </div>

                <div class="sideItemLabel">
                    <label>Size</label>
                </div>
                <div class="sideItem">
                    <input type="range" ref={ref} min="10" max="100" class="slider" id="myRange" label="Array Size"></input>
                </div>


                <div class="sideItem">
                    <Button variant="contained" color="primary" onClick={() => {
                        setSize(ref.current.value);
                        setColor(genCols);
                        setArr(generate(size));
                    }}> Generate</Button></div>

                <div class="sideItemLabel">
                    <label>Algorithm</label>
                </div>
                <div class="sideItem">
                        <RadioButtonsGroup algo={algo} setAlgo={setAlgo}/>
                </div>


                    <div class="sideItem">
                        <Button variant="contained" color="secondary" onClick={() => {
                            BubbleSort(arr, setArr);
                            // mergeSort(arr, setArr);
                        }}> Sort</Button></div>
            </center>
        </div>
    )
}
