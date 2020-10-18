import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom'

function BudgetAllocation(props){
const [budgetItem, setBudgetItem] = useState({
    item: "",
    budget: null
});


function handleChange(event){
const  {name, value} = event.target
setBudgetItem(prevItem => ({...prevItem,
    [name]: value})
)
}
function handleClick(event){
props.tableItem(budgetItem)
setBudgetItem({
    item: "",
    budget: ""
})
event.preventDefault()
}
return (
<div>
<h2>Budget Allocation:</h2>
<form>
    <Zoom in={true}><input onChange={handleChange} autoComplete ="off"name="item" value ={budgetItem.item} type="text" placeholder="Enter Spending Allocation"/></Zoom>
    <Zoom in={true}><input onChange={handleChange}  name="budget" value={budgetItem.budget} type="number" placeholder="Enter Budget"/></Zoom>
    <Zoom in={true}><Fab onClick={handleClick} variant="extended" color="primary"><span className="set-button">Set Budget 🠆</span></Fab></Zoom>
</form>
</div>)
}

export default BudgetAllocation;