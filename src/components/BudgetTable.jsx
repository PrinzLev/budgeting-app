import { green } from "@material-ui/core/colors";
import React, {useState} from "react";


function BudgetTable (props){
    const [spentBudget, setSpentBudget] = useState();
    const [spentBudgetDefined, setSpentBudgeDefined] = useState(false);
    function handleChange(e){
        const newValue = e.target.value
        setSpentBudget(newValue);
        setSpentBudgeDefined(true)
    }

    let percentSpend = (spentBudget/props.budget) * 100

   
        
    

    return(
            <tr>
            <td>
                {props.item}
                </td>
                <td style={spentBudgetDefined ? {
                color:  
                percentSpend < 50 ? "#79d70f": 
                percentSpend < 100 ? "#cdb30c": 
                percentSpend === 100 ? "#cdc9c3":
                percentSpend <= 125 ? "#fca652":
                percentSpend > 125 && "#bb2205"}: 
                {color: "white"}}>
                ₱{spentBudgetDefined ? props.budget - spentBudget: props.budget}
                </td>
                <td>
                <input onChange={handleChange} value={spentBudget} type="number" placeholder="Enter spent amount"/>
                </td>
            </tr>

    )
}

export default BudgetTable;