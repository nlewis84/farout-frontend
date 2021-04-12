export function fetchPictures() {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_PICTURES_REQUEST' });
        fetch('http://localhost:3000/api/v1/pictures')
            .then(response => response.json())
            .then(pictures => dispatch({ type: 'ADD_PICTURES', pictures }));
    };
}
