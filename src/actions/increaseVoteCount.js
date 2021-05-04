export const increaseVoteCount = (data) => {
    // debugger
    return (dispatch) => {
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