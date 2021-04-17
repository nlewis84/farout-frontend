export default function reducer(state = { pictures: [] }, action) {
    // debugger
    switch (action.type) {
        case 'FETCH_PICTURES':
            // debugger
            return { pictures: action.payload }
        case 'INCREASE_COUNT':
            // debugger
            return { pictures: action.payload }
        // return { ...state, pictures: [...state.pictures, action.payload] }
        default:
            return state;
    }
}
