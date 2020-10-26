import React from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord= expenseCount ===1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00'); 
    
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="expense-header">
                    <div>
                        <h1 className="page-header__title">No. of Expenses</h1>
                        <h3><span>{expenseCount}</span> {expenseWord} </h3>
                    </div>
                    <div>
                        <h1 className="page-header__title">Total Amount</h1>
                        <h3><span>{formattedExpensesTotal}</span></h3>
                    </div>
                </div>
                
                <div className='page-header__actions'>
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>  
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)        
    }
};

export default connect(mapStateToProps)(ExpensesSummary);