import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function RadioButtonsGroup({algo,setAlgo}) {

  const handleChange = (event) => {
    setAlgo(event.target.value);
  };

  const algos=[ "Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort"]

  return (
      <RadioGroup aria-label="Algorithm" name="algo"  value={algo}
      onChange={handleChange}>
          <FormControlLabel value={0}  control={<Radio />} label="Bubble Sort" />
        { algos.slice(1,).map((ele,id) => (
              <FormControlLabel value={id+1} disabled  control={<Radio />} label={ele} />
        ))}
      </RadioGroup>
  );
}