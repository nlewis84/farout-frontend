export default function reducer(state = { picture: [], topFivePictures: [], pictures: [] }, action) {
    // debugger
    switch (action.type) {
        case 'FETCH_PICTURES':
            // debugger
            return { 
                ...state, 
                pictures: action.payload 
            }
        case 'INCREASE_COUNT':
            // debugger
            return {
                ...state, 
                pictures: action.payload 
            }
        case 'FETCH_TOP_FIVE':
            // debugger
            return { 
                ...state, 
                topFivePictures: action.payload 
            }
        case 'FETCH_NEWEST':
            debugger
            return { 
                ...state, 
                picture: action.payload 
            }
        default:
            return state;
    }
}
