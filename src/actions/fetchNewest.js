export function fetchNewest() {
    // debugger
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/pictures/newest')
        // fetch('https://farout-api.herokuapp.com/api/v1/pictures/newest')
            .then(response => response.json())
            .then(picture => dispatch({ type: 'FETCH_NEWEST', payload: picture }));
    };
}