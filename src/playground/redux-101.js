import { createStore } from 'redux';



const IncrementCount=({IncrementBy=1}={})=>{
  return{
    type:'INCREMENT',
    IncrementBy
  };
};



const DecrementCount=({DecrementBy=1}={})=>{
  return{
    type:'DECREMENT',
    DecrementBy
  };
};

const ResetCount=({}={})=>{
    return{
    type:'RESET'     
    };
  };


  const SetCount=({Set}={})=>{
    return{
      type:'SET',
      Set
    };
  };


const countReducer=(state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.IncrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.DecrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
      case 'SET':
      return{
       count:action.Set
      };
    default:
      return state;
  }
};


const store = createStore(countReducer);

store.subscribe(()=>{
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// I'd like to increment the count
store.dispatch(IncrementCount());

store.dispatch(IncrementCount({IncrementBy:5}));

store.dispatch(ResetCount());

store.dispatch(DecrementCount());
store.dispatch(DecrementCount({DecrementBy:5}));
store.dispatch(DecrementCount());
store.dispatch(DecrementCount({DecrementBy:null}));
store.dispatch(ResetCount());
store.dispatch(SetCount({Set:45}))

// I'd like to reset the count to zero


