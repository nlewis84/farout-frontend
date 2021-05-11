export function filterPictures() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/pictures/filter')
        // fetch('https://farout-api.herokuapp.com/api/v1/pictures/filter')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FILTER_PICTURES', payload: pictures }));
    };
}