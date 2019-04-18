

export function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }

}

export function unDoAble(reducer) {

    const initialState = reducer(undefined, {});

    return function (state = initialState, action) {
        switch (action.type) {
            case "UNDO": return state - 1;
            case "REDO": return state + 1;
            default: return reducer(state, action)

        }

    }
}