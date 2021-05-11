export function fetchTopFive() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/pictures/top')
        // fetch('https://farout-api.herokuapp.com/api/v1/pictures/top')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FETCH_TOP_FIVE', payload: pictures }));
    };
}