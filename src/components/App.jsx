import React, { useState } from "react";
import Salary from "./Salary"
import BudgetAllocation from "./BudgetAllocation"
import BudgetTable from "./BudgetTable"
function App(){

    const [allocationTable, setAllocationTable] = useState([])
    const [salary, setSalary] = useState(); 
    const [boolSalary, setBoolSalary] = useState(false);
    const [boolAlloction, setBoolAllocation] = useState(false);

    function enterSalary(newSalary) {
        setSalary(newSalary);
        setBoolSalary(true);
        
    }

    function addBudgetAllocation (item){
        setAllocationTable(prevItem => [
            ...prevItem, item
        ])
        setBoolAllocation(true);
        
    }

    return (<div>
    <header><img className="app-logo" src="output-onlinepngtools.png"></img>
    <div className="app-title">
    <h1>Budgeting
    <br /> App
    </h1>
    </div></header>
    <div className="input-section">
    <Salary onSetSalary={enterSalary}/>
    <BudgetAllocation tableItem={addBudgetAllocation}/>
    </div>
    <div className="budget-table">
    <table>
    <tr>
            <th>
            Monthly Spendings
            </th>
            <th>
            Remaining Budget
            </th>
            <th>
            Spent Budget
            </th>
    </tr>
    
    {allocationTable.map((allocation, index)=>{
        return( <BudgetTable   key={index} item={allocation.item} budget={allocation.budget}/>)

    })}
    
   {boolSalary && <tr className="salary">
        <td > 
        Salary
        </td>
        <td>
        ₱{salary}
        </td>
        <td></td>
    </tr>}
    {boolSalary && <tr className="savings">
        <td > 
        Saving
        </td>
        <td>
        ₱{allocationTable.reduce((accumulator, {budget}) => {return accumulator - budget}, salary)}
        </td>
    </tr>}
        
    </table>
    </div>
    </div>)
}

export default App;