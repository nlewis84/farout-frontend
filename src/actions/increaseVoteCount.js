export const increaseVoteCount = (data) => {
    debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pictures/${data.vote.pictureId}/votes/${data.vote.pictureId}`, {
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



