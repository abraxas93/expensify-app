import { createStore } from 'redux';

// default value for input param is {} ... if input param don't have field incrementBy it's default value is 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({ 
    type: 'RESET',
    count: 0
});

const setCount = ({ count = 1} = {}) => ({
    type: 'SET',
    count: count
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
            }
        default: 
            return state;
    }
});

// store.subscribe for everytime we change the state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



store.dispatch(incrementCount({ incrementBy: 3 }));


store.dispatch(decrementCount({ decrementBy: 1 }));



store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10}));

unsubscribe();

store.dispatch(setCount({ count: 101 }));
store.dispatch(setCount());
console.log(store.getState());
