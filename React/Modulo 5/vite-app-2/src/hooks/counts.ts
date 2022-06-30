import { useReducer } from 'react';

type reducerCount = {
    value: number;
}
type reducerAction = {
    type: string;
}

const initialCount = {
    value: 0
};

const reducer = (count: reducerCount, action: reducerAction) => {
    switch (action.type) {
        case 'ADD':
            return { ...count, value: count.value + 1 };
            break;
        case 'DEL':
            if (count.value > 0) {
                return { ...count, value: count.value - 1 };
            }
            break;
        case 'RESET':
            return initialCount;
            break;
    }
    return count
}

export const useCount = () => {
    return useReducer(reducer, initialCount);
}