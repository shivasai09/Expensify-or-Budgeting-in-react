import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters';


class ExpenseListFilters extends React.Component{
    state={
        calenderFocused:false
    };
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange=(calenderFocused)=>{
        this.setState(()=>({calenderFocused}));
    };
    render()
    {
        return(
            
            <div>
                <input type="text"  onChange={(e)=>{
                   this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    if(e.target.value==='date')
                    {
                         this.props.dispatch(sortByDate());
                    }
                    else{
                        this.props.dispatch(sortByAmount());
                    }
                    }}>
                    <option value='date'>date</option>
                    <option value='amount'>amount</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
                />
            </div>
        );
    }
}


const mapStateToFilter=(state)=>{
    
    return{
       filters:state.filters
    };
};

export default connect(mapStateToFilter)(ExpenseListFilters);