export function fetchNewest() {
    // debugger
    return (dispatch) => {
        fetch('https://farout-api.herokuapp.com/api/v1/pictures/newest')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FETCH_NEWEST', payload: pictures }));
    };
}