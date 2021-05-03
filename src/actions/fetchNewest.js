export function fetchNewest() {
    // debugger
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/pictures/newest')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FETCH_NEWEST', payload: pictures }));
    };
}