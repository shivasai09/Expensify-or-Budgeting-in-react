import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            description: props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            calendarFocused:false,
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            error:''
           
    
        };
    }
  
    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description:description}));
    };
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    };
    onAmountChange=(e)=>{
        let amount = e.target.value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState({amount})
        }
    };
    onDateChange=(createdAt)=>{
        if(createdAt)
        {
            this.setState(()=>({createdAt}));
        }
    };
    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused:focused}));
    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description||!this.state.amount)
        {
              this.setState(()=>({error:'please provide description and amount.'}));
        }
        else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description:this.state.description,
                note:this.state.note,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf()
             
            });
        }
    };
    render()
    {
        return(
            <div>
                <h1>ExpenseForm</h1>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/ >
                <input type ='text'placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
                <textarea placeholder="please write a note" value= {this.state.note} onChange={this.onNoteChange}>
              
                </textarea>
                <button>Add Expense</button>
                </form>
            </div>
        );
    }
}