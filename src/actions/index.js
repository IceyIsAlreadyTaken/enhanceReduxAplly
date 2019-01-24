
export function increment() {
    return { type: 'INCREMENT' }
}
// const boundIncrement = () => dispatch(increment());

export function decrement() {
    return { type: 'DECREMENT' }
}

// const boundDecrement = () => dispatch(decrement());

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const value = getState();
        if (value % 2 === 0) {
            return;
        }
        dispatch(increment());
    }
}

export function incrementAsync() {
    return (dispatch) => {
        const timer = setTimeout(() => {
            dispatch(increment());
            clearTimeout(timer);
        }, 1000);
    }
}

// export default {
//     increment,
//     decrement,
//     incrementIfOdd,
//     incrementAsync
// }