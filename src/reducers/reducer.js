export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'START_ADDING_PICTURES_REQUEST':
            return {}
        case 'INCREASE_COUNT':
            return { count: state.count + 1 }
        case 'DECREASE_COUNT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}
