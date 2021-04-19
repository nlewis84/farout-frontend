export default function reducer(state = { pictures: [] }, action) {
    // debugger
    switch (action.type) {
        case 'FETCH_PICTURES':
            // debugger
            return { pictures: action.payload }
        case 'INCREASE_COUNT':
            // debugger
            return { pictures: action.payload }
        case 'FETCH_TOP_FIVE':
            // debugger
            return { pictures: action.payload }
        case 'FETCH_NEWEST':
            return { pictures: action.payload }
        default:
            return state;
    }
}
