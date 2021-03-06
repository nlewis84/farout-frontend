export const increaseVoteCount = (data) => {
    return (dispatch) => {
        // fetch(`http://localhost:3001/api/v1/pictures/${data.pictureId}/votes/${data.pictureId}`, {
        fetch(`https://farout-api.herokuapp.com/api/v1/pictures/${data.pictureId}/votes/${data.pictureId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(picture => dispatch({ type: 'INCREASE_COUNT', payload: picture }));
    };
}