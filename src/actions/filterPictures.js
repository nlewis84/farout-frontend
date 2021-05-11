export function filterPictures() {
    return (dispatch) => {
        // debugger
        fetch('http://localhost:3000/api/v1/pictures/filter')
        // fetch('https://farout-api.herokuapp.com/api/v1/pictures/top')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'FILTER_PICTURES', payload: pictures }));
    };
}