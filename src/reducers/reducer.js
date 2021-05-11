export default function reducer(state = { newestPictures: [], topFivePictures: [], pictures: [], filteredPictures: []}, action) {
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
            return { 
                ...state, 
                newestPictures: action.payload 
            }
        case 'FILTER_PICTURES':
            // debugger
            return { 
                ...state, 
                filteredPictures: action.payload 
            }
        default:
            return state;
    }
}
