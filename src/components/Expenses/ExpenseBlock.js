import ExpenseList from './ExpensesList.js'
import './ExpenseBlock.css';
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseChart from './ExpensesChart.js';
import React, {useState} from 'react';

function ExpenseBlock(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangedHandler(selectedYear){
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    

    return(

        <div>
        

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
            
            
        </Card>

        </div>
    )

}

export default ExpenseBlock;
