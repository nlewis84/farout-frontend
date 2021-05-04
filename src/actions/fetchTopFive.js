export function fetchTopFive() {
    return (dispatch) => {
        // debugger
        fetch('https://farout-api.herokuapp.com/api/v1/pictures/top')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FETCH_TOP_FIVE', payload: pictures }));
    };
}