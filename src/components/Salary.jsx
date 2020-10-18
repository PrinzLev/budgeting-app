import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom'

function Salary(props){
const [inputSalary, setInputSalary] = useState();


function handleChange (e){
    const newValue = e.target.value;
    setInputSalary(newValue);
}
function handleClick (e){
    props.onSetSalary(inputSalary)
    setInputSalary("");
    e.preventDefault()
}
return (
<div>
    <form>
        <h2>Salary:</h2>
        <Zoom in={true}><input  onChange={handleChange} value={inputSalary} type="number" placeholder="Enter salary . . ."/></Zoom>
        <Zoom in={true}><Fab onClick={handleClick} variant="extended" color="primary"><span className="set-button">Set Salary 🠆</span></Fab></Zoom>
    </form>
</div>)

}


export default Salary;
