export function fetchPictures() {
    return (dispatch) => {
        // fetch('http://localhost:3001/api/v1/pictures')
        fetch('https://farout-api.herokuapp.com/api/v1/pictures')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FETCH_PICTURES', payload: pictures }));
    };
}