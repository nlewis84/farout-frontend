export default function reducer(state = { pictures: [] }, action) {
    switch (action.type) {
        case 'FETCH_PICTURES':
            return { pictures: action.payload }
        case 'INCREASE_COUNT':
            return { count: state.count + 1 }
        case 'DECREASE_COUNT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}
